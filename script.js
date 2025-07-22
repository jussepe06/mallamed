/**
 * Malla Interactiva - Medicina Humana USMP
 * Script principal con todas las funcionalidades
 */

// Datos de la malla curricular
const mallaData = {
  creditos: {
    // Ciclo I
    'intro_medicina': 4,
    'biologia_celular': 6,
    'quimica_general': 4,
    'fisica_medica': 3,
    'anatomia_basica': 5,
    'histologia': 4,

    // Ciclo II
    'bioquimica': 6,
    'fisiologia_1': 6,
    'embriologia': 4,
    'genetica': 4,
    'bioetica': 2,

    // ... (agregar todos los créditos)
  },

  requisitos: {
    // Ciclo II
    'bioquimica': ['quimica_general'],
    'fisiologia_1': ['biologia_celular'],
    'embriologia': ['biologia_celular', 'histologia'],
    
    // Ciclo III
    'fisiologia_2': ['fisiologia_1'],
    'microbiologia': ['bioquimica'],
    
    // ... (agregar todos los prerrequisitos)
  },

  ciclos: [
    {
      id: 1,
      nombre: 'Ciclo I',
      cursos: ['intro_medicina', 'biologia_celular', 'quimica_general', 'fisica_medica', 'anatomia_basica', 'histologia']
    },
    {
      id: 2,
      nombre: 'Ciclo II',
      cursos: ['bioquimica', 'fisiologia_1', 'embriologia', 'genetica', 'bioetica']
    },
    // ... (agregar todos los ciclos)
  ]
};

// Estado de la aplicación
const state = {
  aprobados: JSON.parse(localStorage.getItem('aprobados')) || [],
  creditosAprobados: 0,
  totalCreditos: 320 // Total estimado, ajustar según tu malla
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
           title="${bloqueado ? 'Cumple los requisitos para desbloquear' : ''}">
        ${getNombreCurso(cursoId)}
        <span class="creditos">${mallaData.creditos[cursoId] || 0} créditos</span>
      </div>
    `;
  }).join('');
}

// Verificar si un curso está desbloqueado
function cursoDesbloqueado(cursoId) {
  if (!mallaData.requisitos[cursoId]) return true; // No tiene requisitos
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
  if (DOM.btnReset) {
    DOM.btnReset.addEventListener('click', resetProgreso);
  }

  // Scroll horizontal con rueda del mouse
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
  
  if (DOM.contadorCreditos) {
    DOM.contadorCreditos.textContent = 
      `${state.creditosAprobados}/${state.totalCreditos} créditos`;
  }
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

// Helpers
function getNombreCurso(id) {
  // Aquí deberías mapear los IDs a nombres completos
  const nombres = {
    'intro_medicina': 'Introducción a los Estudios Médicos',
    'biologia_celular': 'Biología Celular',
    // ... (agregar todos los nombres)
  };
  return nombres[id] || id;
}

function getRequisitosText(cursoId) {
  if (!mallaData.requisitos[cursoId]) return '';
  return `Requisitos: ${mallaData.requisitos[cursoId].map(getNombreCurso).join(', ')}`;
}

// Iniciar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', init);
