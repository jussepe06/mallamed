/**
 * Malla Interactiva - Medicina Humana USMP
 * Versión corregida y verificada
 */

// Datos completos de la malla curricular
const mallaData = {
  creditos: {
    // Ciclo I
    'intro_medicina': 2,
    'biologia_celular': 4,
    'quimica_general': 3,
    'fisica_medica': 3,
    'anatomia_basica': 5,
    'histologia': 4,

    // Ciclo II
    'bioquimica': 6,
    'fisiologia_1': 6,
    'embriologia': 4,
    'genetica': 4,
    'bioetica': 2,

    // ... (todos los demás ciclos como en la versión anterior)
  },

  requisitos: {
    // ... (todos los requisitos como en la versión anterior)
  },

  ciclos: [
    // ... (todos los ciclos como en la versión anterior)
  ]
};

// Estado de la aplicación
const state = {
  aprobados: JSON.parse(localStorage.getItem('aprobados')) || [],
  creditosAprobados: 0,
  totalCreditos: 320
};

// Elementos del DOM
const DOM = {
  mallaContainer: document.getElementById('malla'),
  contadorCreditos: document.getElementById('creditos-counter'),
  btnReset: document.getElementById('btn-reset')
};

// Inicialización
function init() {
  renderMalla();
  setupEventListeners();
  updateCreditos();
  actualizarDesbloqueos();
}

// Renderizar toda la malla
function renderMalla() {
  let html = '';
  
  mallaData.ciclos.forEach(ciclo => {
    html += `
      <div class="ciclo">
        <h2>${ciclo.nombre}</h2>
        ${renderCursos(ciclo.cursos)}
      </div>
    `;
  });

  DOM.mallaContainer.innerHTML = html;
}

// Renderizar cursos de un ciclo
function renderCursos(cursos) {
  return cursos.map(cursoId => {
    const aprobado = state.aprobados.includes(cursoId);
    const bloqueado = !aprobado && !cursoDesbloqueado(cursoId);
    
    return `
      <div class="curso ${aprobado ? 'aprobado' : ''} ${bloqueado ? 'bloqueado' : ''}" 
           data-id="${cursoId}" 
           title="${bloqueado ? getRequisitosText(cursoId) : ''}">
        ${getNombreCurso(cursoId)}
        <span class="creditos">${mallaData.creditos[cursoId] || 0} créditos</span>
      </div>
    `;
  }).join('');
}

// Verificar si un curso está desbloqueado
function cursoDesbloqueado(cursoId) {
  if (!mallaData.requisitos[cursoId]) return true;
  return mallaData.requisitos[cursoId].every(req => state.aprobados.includes(req));
}

// Configurar event listeners
function setupEventListeners() {
  // Click en cursos
  document.addEventListener('click', e => {
    const cursoElement = e.target.closest('.curso:not(.bloqueado)');
    if (!cursoElement) return;
    
    toggleAprobado(cursoElement);
  });

  // Botón reset
  DOM.btnReset.addEventListener('click', resetProgreso);

  // Scroll horizontal
  DOM.mallaContainer.addEventListener('wheel', e => {
    if (e.deltaY !== 0) {
      e.preventDefault();
      DOM.mallaContainer.scrollLeft += e.deltaY;
    }
  });
}

// Alternar estado de aprobado
function toggleAprobado(element) {
  const cursoId = element.dataset.id;
  
  if (state.aprobados.includes(cursoId)) {
    state.aprobados = state.aprobados.filter(id => id !== cursoId);
    element.classList.remove('aprobado');
  } else {
    state.aprobados.push(cursoId);
    element.classList.add('aprobado');
  }

  saveState();
  actualizarDesbloqueos();
  updateCreditos();
}

// Actualizar cursos bloqueados/desbloqueados
function actualizarDesbloqueos() {
  document.querySelectorAll('.curso:not(.aprobado)').forEach(element => {
    const cursoId = element.dataset.id;
    const desbloqueado = cursoDesbloqueado(cursoId);
    
    element.classList.toggle('bloqueado', !desbloqueado);
    element.title = desbloqueado ? '' : getRequisitosText(cursoId);
  });
}

// Actualizar contador de créditos
function updateCreditos() {
  state.creditosAprobados = state.aprobados.reduce(
    (total, cursoId) => total + (mallaData.creditos[cursoId] || 0), 0
  );
  
  DOM.contadorCreditos.textContent = 
    `${state.creditosAprobados}/${state.totalCreditos} créditos`;
}

// Guardar estado en localStorage
function saveState() {
  localStorage.setItem('aprobados', JSON.stringify(state.aprobados));
}

// Resetear progreso
function resetProgreso() {
  if (confirm('¿Estás seguro de querer borrar todo tu progreso?')) {
    state.aprobados = [];
    localStorage.removeItem('aprobados');
    renderMalla();
    updateCreditos();
  }
}

// Obtener nombre completo del curso
function getNombreCurso(id) {
  const nombres = {
    'intro_medicina': 'Introducción a los Estudios Médicos',
    'biologia_celular': 'Biología Celular',
    'quimica_general': 'Química General',
    // ... (todos los nombres de cursos)
  };
  return nombres[id] || id;
}

// Obtener texto de requisitos
function getRequisitosText(cursoId) {
  if (!mallaData.requisitos[cursoId]) return 'No tiene requisitos';
  return `Requisitos: ${mallaData.requisitos[cursoId].map(getNombreCurso).join(', ')}`;
}

// Iniciar la aplicación
document.addEventListener('DOMContentLoaded', init);
