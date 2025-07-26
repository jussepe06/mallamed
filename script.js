/**
 * Malla Interactiva Completa - Medicina Humana USMP
 * Versión final verificada
 */

// Datos de la malla curricular
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

    // Ciclo III
    'fisiologia_2': 6,
    'microbiologia': 5,
    'parasitologia': 4,
    'inmunologia': 4,
    'patologia_general': 5,

    // Ciclo IV
    'farmacologia_general': 5,
    'semiologia': 6,
    'propedeutica': 4,
    'epidemiologia': 4,
    'salud_publica_1': 4,

    // Ciclo V
    'inmunologia_humana': 4,
    'microbiologia_parasitologia': 5,
    'investigacion_clinica': 3,
    'gestion_cientifica': 2,
    'fisiologia_avanzada': 4,

    // Ciclo VI
    'farmacologia': 5,
    'psicologia_1': 4,
    'fisiopatologia': 5,
    'salud_publica_avanzada': 4,
    'bases_documentacion': 3,

    // Ciclo VII
    'semiologia_general': 8,
    'cardiologia': 4,
    'neumologia': 4,
    'laboratorio_clinico': 2,
    'diagnostico_imagen': 2,

    // Ciclo VIII
    'hematologia': 4,
    'reumatologia': 4,
    'nefrologia': 4,
    'neurologia': 4,
    'patologia_2': 3,

    // Ciclo IX
    'gastroenterologia': 4,
    'dermatologia': 4,
    'endocrinologia': 4,
    'infectologia': 4,
    'geriatria': 3,

    // Ciclo X
    'cirugia_general': 5,
    'cirugia_digestiva': 5,
    'especialidades_quirurgicas': 4,
    'anestesiologia': 4,

    // Ciclo XI
    'pediatria_1': 5,
    'pediatria_2': 4,
    'neonatologia': 4,
    'emergencias_medicas': 5,

    // Ciclo XII
    'ginecologia': 5,
    'obstetricia': 5,
    'medicina_familiar': 4,
    'medicina_legal': 3,

    // Ciclo XIII
    'internado_1': 32,

    // Ciclo XIV
    'internado_2': 32,
    'trabajo_investigacion': 4
  },

  requisitos: {
    // Ciclo II
    'bioquimica': ['quimica_general'],
    'fisiologia_1': ['biologia_celular', 'histologia'],
    'embriologia': ['biologia_celular', 'histologia'],
    'genetica': ['biologia_celular'],
    
    // Ciclo III
    'fisiologia_2': ['fisiologia_1'],
    'microbiologia': ['bioquimica'],
    'parasitologia': ['bioquimica'],
    'inmunologia': ['fisiologia_1'],
    'patologia_general': ['histologia'],
    
    // Ciclo IV
    'farmacologia_general': ['bioquimica', 'fisiologia_2'],
    'semiologia': ['anatomia_basica', 'fisiologia_2'],
    'propedeutica': ['anatomia_basica'],
    'epidemiologia': ['bioestadistica'],
    'salud_publica_1': ['epidemiologia'],
    
    // Ciclo V
    'inmunologia_humana': ['inmunologia'],
    'microbiologia_parasitologia': ['microbiologia', 'parasitologia'],
    'investigacion_clinica': ['epidemiologia'],
    'fisiologia_avanzada': ['fisiologia_2'],
    
    // Ciclo VI
    'farmacologia': ['farmacologia_general'],
    'fisiopatologia': ['fisiologia_2', 'patologia_general'],
    'salud_publica_avanzada': ['salud_publica_1'],
    'bases_documentacion': ['investigacion_clinica'],
    
    // Ciclo VII
    'semiologia_general': ['fisiologia_2', 'patologia_general', 'farmacologia_general'],
    'cardiologia': ['fisiologia_2', 'farmacologia_general'],
    'neumologia': ['fisiologia_2'],
    'laboratorio_clinico': ['bioquimica', 'microbiologia'],
    
    // Ciclo VIII
    'hematologia': ['semiologia_general'],
    'reumatologia': ['semiologia_general'],
    'nefrologia': ['semiologia_general'],
    'neurologia': ['semiologia_general'],
    'patologia_2': ['patologia_general', 'semiologia_general'],
    
    // Ciclo IX
    'gastroenterologia': ['hematologia', 'nefrologia'],
    'dermatologia': ['patologia_2'],
    'endocrinologia': ['fisiologia_avanzada'],
    'infectologia': ['microbiologia_parasitologia', 'inmunologia_humana'],
    
    // Ciclo X
    'cirugia_general': ['gastroenterologia', 'dermatologia'],
    'cirugia_digestiva': ['gastroenterologia'],
    'especialidades_quirurgicas': ['cirugia_general'],
    'anestesiologia': ['farmacologia', 'fisiologia_avanzada'],
    
    // Ciclo XI
    'pediatria_1': ['cirugia_general'],
    'pediatria_2': ['pediatria_1'],
    'neonatologia': ['pediatria_1'],
    'emergencias_medicas': ['cirugia_general'],
    
    // Ciclo XII
    'ginecologia': ['pediatria_2'],
    'obstetricia': ['ginecologia'],
    'medicina_familiar': ['pediatria_2', 'ginecologia'],
    'medicina_legal': ['cirugia_general'],
    
    // Ciclo XIII
    'internado_1': ['ginecologia', 'obstetricia', 'pediatria_2'],
    
    // Ciclo XIV
    'internado_2': ['internado_1'],
    'trabajo_investigacion': ['investigacion_clinica', 'bases_documentacion']
  },

  ciclos: [
    {
      id: 1,
      nombre: 'Ciclo I - Básico',
      cursos: ['intro_medicina', 'biologia_celular', 'quimica_general', 
               'fisica_medica', 'anatomia_basica', 'histologia']
    },
    {
      id: 2,
      nombre: 'Ciclo II - Básico',
      cursos: ['bioquimica', 'fisiologia_1', 'embriologia', 
               'genetica', 'bioetica']
    },
    {
      id: 3,
      nombre: 'Ciclo III - Básico',
      cursos: ['fisiologia_2', 'microbiologia', 'parasitologia', 
               'inmunologia', 'patologia_general']
    },
    {
      id: 4,
      nombre: 'Ciclo IV - Transición',
      cursos: ['farmacologia_general', 'semiologia', 'propedeutica', 
               'epidemiologia', 'salud_publica_1']
    },
    {
      id: 5,
      nombre: 'Ciclo V - Transición',
      cursos: ['inmunologia_humana', 'microbiologia_parasitologia', 
               'investigacion_clinica', 'gestion_cientifica', 'fisiologia_avanzada']
    },
    {
      id: 6,
      nombre: 'Ciclo VI - Clínico',
      cursos: ['farmacologia', 'psicologia_1', 'fisiopatologia', 
               'salud_publica_avanzada', 'bases_documentacion']
    },
    {
      id: 7,
      nombre: 'Ciclo VII - Clínico',
      cursos: ['semiologia_general', 'cardiologia', 'neumologia', 
               'laboratorio_clinico', 'diagnostico_imagen']
    },
    {
      id: 8,
      nombre: 'Ciclo VIII - Clínico',
      cursos: ['hematologia', 'reumatologia', 'nefrologia', 
               'neurologia', 'patologia_2']
    },
    {
      id: 9,
      nombre: 'Ciclo IX - Clínico',
      cursos: ['gastroenterologia', 'dermatologia', 'endocrinologia', 
               'infectologia', 'geriatria']
    },
    {
      id: 10,
      nombre: 'Ciclo X - Quirúrgico',
      cursos: ['cirugia_general', 'cirugia_digestiva', 'especialidades_quirurgicas', 
               'anestesiologia']
    },
    {
      id: 11,
      nombre: 'Ciclo XI - Quirúrgico',
      cursos: ['pediatria_1', 'pediatria_2', 'neonatologia', 
               'emergencias_medicas']
    },
    {
      id: 12,
      nombre: 'Ciclo XII - Quirúrgico',
      cursos: ['ginecologia', 'obstetricia', 'medicina_familiar', 
               'medicina_legal']
    },
    {
      id: 13,
      nombre: 'Ciclo XIII - Internado',
      cursos: ['internado_1']
    },
    {
      id: 14,
      nombre: 'Ciclo XIV - Internado',
      cursos: ['internado_2', 'trabajo_investigacion']
    }
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
    // Ciclo I
    'intro_medicina': 'Introducción a los Estudios Médicos',
    'biologia_celular': 'Biología Celular',
    'quimica_general': 'Química General',
    'fisica_medica': 'Física Médica',
    'anatomia_basica': 'Anatomía Básica',
    'histologia': 'Histología',
    
    // Ciclo II
    'bioquimica': 'Bioquímica Médica',
    'fisiologia_1': 'Fisiología Humana I',
    'embriologia': 'Embriología',
    'genetica': 'Genética',
    'bioetica': 'Bioética',
    
    // Ciclo III
    'fisiologia_2': 'Fisiología Humana II',
    'microbiologia': 'Microbiología',
    'parasitologia': 'Parasitología',
    'inmunologia': 'Inmunología',
    'patologia_general': 'Patología General',
    
    // Ciclo IV
    'farmacologia_general': 'Farmacología General',
    'semiologia': 'Semiología',
    'propedeutica': 'Propedéutica Médica',
    'epidemiologia': 'Epidemiología',
    'salud_publica_1': 'Salud Pública I',
    
    // Ciclo V
    'inmunologia_humana': 'Inmunología Humana',
    'microbiologia_parasitologia': 'Microbiología y Parasitología',
    'investigacion_clinica': 'Investigación Clínica',
    'gestion_cientifica': 'Gestión Científica',
    'fisiologia_avanzada': 'Fisiología Avanzada',
    
    // Ciclo VI
    'farmacologia': 'Farmacología',
    'psicologia_1': 'Psicología I',
    'fisiopatologia': 'Fisiopatología',
    'salud_publica_avanzada': 'Salud Pública Avanzada',
    'bases_documentacion': 'Bases y Documentación',
    
    // Ciclo VII
    'semiologia_general': 'Semiología General',
    'cardiologia': 'Cardiología',
    'neumologia': 'Neumología',
    'laboratorio_clinico': 'Laboratorio Clínico',
    'diagnostico_imagen': 'Diagnóstico por Imagen',
    
    // Ciclo VIII
    'hematologia': 'Hematología',
    'reumatologia': 'Reumatología',
    'nefrologia': 'Nefrología',
    'neurologia': 'Neurología',
    'patologia_2': 'Patología II',
    
    // Ciclo IX
    'gastroenterologia': 'Gastroenterología',
    'dermatologia': 'Dermatología',
    'endocrinologia': 'Endocrinología',
    'infectologia': 'Infectología',
    'geriatria': 'Geriatría',
    
    // Ciclo X
    'cirugia_general': 'Cirugía General',
    'cirugia_digestiva': 'Cirugía del Aparato Digestivo',
    'especialidades_quirurgicas': 'Especialidades Quirúrgicas',
    'anestesiologia': 'Anestesiología',
    
    // Ciclo XI
    'pediatria_1': 'Pediatría General I',
    'pediatria_2': 'Pediatría General II',
    'neonatologia': 'Neonatología',
    'emergencias_medicas': 'Emergencias Médicas',
    
    // Ciclo XII
    'ginecologia': 'Ginecología',
    'obstetricia': 'Obstetricia',
    'medicina_familiar': 'Medicina Familiar',
    'medicina_legal': 'Medicina Legal',
    
    // Ciclo XIII
    'internado_1': 'Internado Médico I',
    
    // Ciclo XIV
    'internado_2': 'Internado Médico II',
    'trabajo_investigacion': 'Trabajo de Investigación'
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
