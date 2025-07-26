/**
 * Malla Interactiva - Medicina Humana USMP
 * Script principal con todas las funcionalidades
 * Basado en el Plan de Estudios 2025
 */

// Datos completos de la malla curricular según el plan de estudios
const mallaData = {
  creditos: {
    // Ciclo I
    'intro_medicina': 2,
    'biologia_celular': 4,
    'quimica_general': 3,
    'fisica_medica': 3,
    'logica_matematica': 3,
    'introduccion_quimica': 3,
    'actividades_deportivas': 1,
    'informatica_educacion': 1,
    'epistemologia_medica': 1,
    'lenguaje': 2,
    'matematica_salud': 3,
    'procedimientos_basicos': 2,
    'quimica_salud': 4,
    'fisica_salud': 3,
    'ingles_1': 1,

    // Ciclo II
    'anatomia_humana_1': 6,
    'histologia_humana': 4,
    'embriologia_genetica': 4,
    'razonamiento_medico': 3,
    'historia_medicina': 2,
    'ingles_2': 1,

    // Ciclo III
    'anatomia_humana_2': 4,
    'bioquimica': 4,
    'fisiologia_humana_1': 5,
    'biocrecimiento': 3,
    'realidad_nacional': 2,

    // Ciclo IV
    'fisiologia_humana_2': 5,
    'epidemiologia': 5,
    'inmunologia_humana': 3,
    'microbiologia_parasitologia': 5,
    'investigacion_clinica': 3,
    'gestion_cientifica': 1,

    // Ciclo V
    'farmacologia': 5,
    'psicologia_1': 4,
    'fisiopatologia': 3,
    'salud_publica_1': 4,
    'bases_documentacion': 3,
    'juegos_olimpicos': 2,

    // Ciclo VI
    'semiologia_general': 8,
    'cardiologia': 4,
    'neumologia': 4,
    'laboratorio_clinico': 2,
    'diagnostico_imagen': 2,
    'nutricion_medio_interno': 3,

    // Ciclo VII
    'hematologia': 4,
    'reumatologia': 4,
    'nefrologia': 4,
    'neurologia': 4,
    'patologia_2': 3,
    'salud_mental': 4,

    // Ciclo VIII
    'gastroenterologia': 4,
    'dermatologia': 4,
    'endocrinologia': 4,
    'infectologia': 4,
    'geriatria': 3,
    'medicina_rehabilitacion': 2,
    'terapeutica': 2,

    // Ciclo IX
    'cirugia_general': 5,
    'cirugia_aparto_digestivo': 5,
    'especialidades_quirurgicas': 3,
    'casos_quirurgicos': 1,
    'tecnica_operatoria': 4,
    'cuidados_paliativos': 2,
    'otorrinolaringologia': 2,

    // Ciclo X
    'pediatria_1': 5,
    'pediatria_2': 4,
    'neonatologia': 4,
    'emergencias_medicas': 5,
    'medicina_legal': 2,
    'genetica_medica': 2,

    // Ciclo XI
    'ginecologia': 5,
    'obstetricia': 5,
    'salud_publica_2': 5,
    'medicina_familiar': 3,
    'gestion_servicios': 2,
    'telemedicina': 2,

    // Ciclo XII
    'internado_1': 32,
    'internado_2': 32,
    'trabajo_investigacion': 2,

    // Asignaturas electivas (ejemplos)
    'anatomia_aplicada': 2,
    'fisico_quimica_medica': 2,
    'software_estadistico': 2,
    'redaccion_cientifica': 2,
    'salud_global': 2,
    'etica_profesionalismo': 2
  },

  requisitos: {
    // Ciclo II
    'anatomia_humana_1': ['biologia_celular'],
    'histologia_humana': ['biologia_celular'],
    'embriologia_genetica': ['biologia_celular'],
    
    // Ciclo III
    'anatomia_humana_2': ['anatomia_humana_1'],
    'bioquimica': ['quimica_salud'],
    'fisiologia_humana_1': ['histologia_humana', 'embriologia_genetica'],
    
    // Ciclo IV
    'fisiologia_humana_2': ['fisiologia_humana_1'],
    'epidemiologia': ['razonamiento_medico'],
    'inmunologia_humana': ['fisiologia_humana_1'],
    'microbiologia_parasitologia': ['fisiologia_humana_1', 'bioquimica'],
    
    // Ciclo V
    'farmacologia': ['bioquimica', 'fisiologia_humana_2'],
    'psicologia_1': ['historia_medicina'],
    'fisiopatologia': ['fisiologia_humana_2'],
    'salud_publica_1': ['epidemiologia'],
    
    // Ciclo VI
    'semiologia_general': ['asignaturas_ciclos_I_a_V'],
    'cardiologia': ['asignaturas_ciclos_I_a_V'],
    'neumologia': ['asignaturas_ciclos_I_a_V'],
    'laboratorio_clinico': ['asignaturas_ciclos_I_a_V'],
    'diagnostico_imagen': ['asignaturas_ciclos_I_a_V'],
    'nutricion_medio_interno': ['asignaturas_ciclos_I_a_V'],
    
    // Ciclo VII
    'hematologia': ['semiologia_general'],
    'reumatologia': ['semiologia_general'],
    'nefrologia': ['semiologia_general'],
    'neurologia': ['semiologia_general'],
    'patologia_2': ['semiologia_general'],
    'salud_mental': ['semiologia_general'],
    
    // Ciclo VIII
    'gastroenterologia': ['hematologia', 'nefrologia', 'neurologia'],
    'dermatologia': ['hematologia', 'nefrologia', 'neurologia'],
    'endocrinologia': ['hematologia', 'nefrologia', 'neurologia'],
    'infectologia': ['hematologia', 'nefrologia', 'neurologia'],
    'geriatria': ['reumatologia'],
    'medicina_rehabilitacion': ['reumatologia'],
    'terapeutica': ['reumatologia'],
    
    // Ciclo IX
    'cirugia_general': ['gastroenterologia', 'dermatologia'],
    'cirugia_aparto_digestivo': ['gastroenterologia', 'dermatologia'],
    'especialidades_quirurgicas': ['gastroenterologia', 'dermatologia'],
    'casos_quirurgicos': ['dermatologia'],
    'tecnica_operatoria': ['dermatologia'],
    'cuidados_paliativos': ['dermatologia'],
    'otorrinolaringologia': ['dermatologia'],
    
    // Ciclo X
    'pediatria_1': ['cirugia_general', 'cirugia_aparto_digestivo'],
    'pediatria_2': ['cirugia_general', 'cirugia_aparto_digestivo'],
    'neonatologia': ['cirugia_general', 'cirugia_aparto_digestivo'],
    'emergencias_medicas': ['especialidades_quirurgicas'],
    'medicina_legal': ['especialidades_quirurgicas'],
    'genetica_medica': ['especialidades_quirurgicas'],
    
    // Ciclo XI
    'ginecologia': ['pediatria_1', 'pediatria_2', 'neonatologia'],
    'obstetricia': ['pediatria_1', 'pediatria_2', 'neonatologia'],
    'salud_publica_2': ['medicina_legal'],
    'medicina_familiar': ['medicina_legal'],
    'gestion_servicios': ['medicina_legal'],
    'telemedicina': ['medicina_legal'],
    
    // Ciclo XII
    'internado_1': ['asignaturas_ciclos_I_a_XI'],
    'internado_2': ['asignaturas_ciclos_I_a_XI'],
    'trabajo_investigacion': ['asignaturas_ciclos_I_a_XI'],
    
    // Electivas
    'anatomia_aplicada': ['anatomia_humana_1'],
    'fisico_quimica_medica': ['psicologia_1'],
    'software_estadistico': ['psicologia_1'],
    'redaccion_cientifica': ['psicologia_1'],
    'salud_global': ['psicologia_1'],
    'etica_profesionalismo': ['psicologia_1']
  },

  ciclos: [
    {
      id: 1,
      nombre: 'Ciclo I - General',
      cursos: [
        'intro_medicina', 'biologia_celular', 'quimica_general', 
        'fisica_medica', 'logica_matematica', 'introduccion_quimica',
        'actividades_deportivas', 'informatica_educacion', 'epistemologia_medica',
        'lenguaje', 'matematica_salud', 'procedimientos_basicos',
        'quimica_salud', 'fisica_salud', 'ingles_1'
      ]
    },
    {
      id: 2,
      nombre: 'Ciclo II - Básico',
      cursos: [
        'anatomia_humana_1', 'histologia_humana', 'embriologia_genetica',
        'razonamiento_medico', 'historia_medicina', 'ingles_2'
      ]
    },
    {
      id: 3,
      nombre: 'Ciclo III - Básico',
      cursos: [
        'anatomia_humana_2', 'bioquimica', 'fisiologia_humana_1',
        'biocrecimiento', 'realidad_nacional'
      ]
    },
    {
      id: 4,
      nombre: 'Ciclo IV - Básico',
      cursos: [
        'fisiologia_humana_2', 'epidemiologia', 'inmunologia_humana',
        'microbiologia_parasitologia', 'investigacion_clinica', 'gestion_cientifica'
      ]
    },
    {
      id: 5,
      nombre: 'Ciclo V - Básico',
      cursos: [
        'farmacologia', 'psicologia_1', 'fisiopatologia',
        'salud_publica_1', 'bases_documentacion', 'juegos_olimpicos'
      ]
    },
    {
      id: 6,
      nombre: 'Ciclo VI - Clínico',
      cursos: [
        'semiologia_general', 'cardiologia', 'neumologia',
        'laboratorio_clinico', 'diagnostico_imagen', 'nutricion_medio_interno'
      ]
    },
    {
      id: 7,
      nombre: 'Ciclo VII - Clínico',
      cursos: [
        'hematologia', 'reumatologia', 'nefrologia',
        'neurologia', 'patologia_2', 'salud_mental'
      ]
    },
    {
      id: 8,
      nombre: 'Ciclo VIII - Clínico',
      cursos: [
        'gastroenterologia', 'dermatologia', 'endocrinologia',
        'infectologia', 'geriatria', 'medicina_rehabilitacion', 'terapeutica'
      ]
    },
    {
      id: 9,
      nombre: 'Ciclo IX - Quirúrgico',
      cursos: [
        'cirugia_general', 'cirugia_aparto_digestivo', 'especialidades_quirurgicas',
        'casos_quirurgicos', 'tecnica_operatoria', 'cuidados_paliativos', 'otorrinolaringologia'
      ]
    },
    {
      id: 10,
      nombre: 'Ciclo X - Quirúrgico',
      cursos: [
        'pediatria_1', 'pediatria_2', 'neonatologia',
        'emergencias_medicas', 'medicina_legal', 'genetica_medica'
      ]
    },
    {
      id: 11,
      nombre: 'Ciclo XI - Quirúrgico',
      cursos: [
        'ginecologia', 'obstetricia', 'salud_publica_2',
        'medicina_familiar', 'gestion_servicios', 'telemedicina'
      ]
    },
    {
      id: 12,
      nombre: 'Ciclo XII - Quirúrgico',
      cursos: [
        'internado_1'
      ]
    },
    {
      id: 13,
      nombre: 'Ciclo XIII - Internado',
      cursos: [
        'internado_2'
      ]
    },
    {
      id: 14,
      nombre: 'Ciclo XIV - Internado',
      cursos: [
        'trabajo_investigacion'
      ]
    },
    {
      id: 15,
      nombre: 'Electivas',
      cursos: [
        'anatomia_aplicada', 'fisico_quimica_medica', 'software_estadistico',
        'redaccion_cientifica', 'salud_global', 'etica_profesionalismo'
      ]
    }
  ]
};

// Estado de la aplicación
const state = {
  aprobados: JSON.parse(localStorage.getItem('aprobados')) || [],
  creditosAprobados: 0,
  totalCreditos: 320 // Total estimado según el plan de estudios
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
  if (!mallaData.requisitos[cursoId]) return true; // No tiene requisitos
  
  // Manejo especial para requisitos de ciclos completos
  if (mallaData.requisitos[cursoId].includes('asignaturas_ciclos_I_a_V')) {
    const ciclosRequeridos = [1, 2, 3, 4, 5];
    return ciclosRequeridos.every(cicloId => {
      const ciclo = mallaData.ciclos.find(c => c.id === cicloId);
      return ciclo.cursos.every(curso => state.aprobados.includes(curso));
    });
  }
  
  if (mallaData.requisitos[cursoId].includes('asignaturas_ciclos_I_a_XI')) {
    const ciclosRequeridos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    return ciclosRequeridos.every(cicloId => {
      const ciclo = mallaData.ciclos.find(c => c.id === cicloId);
      return ciclo.cursos.every(curso => state.aprobados.includes(curso));
    });
  }
  
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
  const nombres = {
    // Ciclo I
    'intro_medicina': 'Introducción a los Estudios Médicos',
    'biologia_celular': 'Biología Celular y Molecular',
    'quimica_general': 'Química General',
    'fisica_medica': 'Física Médica',
    'logica_matematica': 'Lógica y Matemática',
    'introduccion_quimica': 'Introducción a la Química',
    'actividades_deportivas': 'Actividades Deportivas',
    'informatica_educacion': 'Informática en Educación Médica',
    'epistemologia_medica': 'Epistemología Médica',
    'lenguaje': 'Lenguaje',
    'matematica_salud': 'Matemática Aplicada a la Salud',
    'procedimientos_basicos': 'Procedimientos Básicos',
    'quimica_salud': 'Química Aplicada a la Salud',
    'fisica_salud': 'Física Aplicada a la Salud',
    'ingles_1': 'Inglés I',
    
    // Ciclo II
    'anatomia_humana_1': 'Anatomía Humana I',
    'histologia_humana': 'Histología Humana',
    'embriologia_genetica': 'Embriología y Genética',
    'razonamiento_medico': 'Razonamiento Médico',
    'historia_medicina': 'Historia de la Medicina',
    'ingles_2': 'Inglés II',
    
    // Ciclo III
    'anatomia_humana_2': 'Anatomía Humana II',
    'bioquimica': 'Bioquímica',
    'fisiologia_humana_1': 'Fisiología Humana I',
    'biocrecimiento': 'Biocrecimiento',
    'realidad_nacional': 'Realidad Nacional',
    
    // Ciclo IV
    'fisiologia_humana_2': 'Fisiología Humana II',
    'epidemiologia': 'Epidemiología',
    'inmunologia_humana': 'Inmunología Humana',
    'microbiologia_parasitologia': 'Microbiología y Parasitología',
    'investigacion_clinica': 'Investigación Clínica',
    'gestion_cientifica': 'Gestión Científica',
    
    // Ciclo V
    'farmacologia': 'Farmacología',
    'psicologia_1': 'Psicología I',
    'fisiopatologia': 'Fisiopatología',
    'salud_publica_1': 'Salud Pública I',
    'bases_documentacion': 'Bases y Documentación',
    'juegos_olimpicos': 'Juegos Olímpicos',
    
    // Ciclo VI
    'semiologia_general': 'Semiología General',
    'cardiologia': 'Cardiología',
    'neumologia': 'Neumología',
    'laboratorio_clinico': 'Laboratorio Clínico',
    'diagnostico_imagen': 'Diagnóstico por Imagen',
    'nutricion_medio_interno': 'Nutrición y Medio Interno',
    
    // Ciclo VII
    'hematologia': 'Hematología',
    'reumatologia': 'Reumatología',
    'nefrologia': 'Nefrología',
    'neurologia': 'Neurología',
    'patologia_2': 'Patología II',
    'salud_mental': 'Salud Mental',
    
    // Ciclo VIII
    'gastroenterologia': 'Gastroenterología',
    'dermatologia': 'Dermatología',
    'endocrinologia': 'Endocrinología',
    'infectologia': 'Infectología',
    'geriatria': 'Geriatría',
    'medicina_rehabilitacion': 'Medicina de Rehabilitación',
    'terapeutica': 'Terapéutica',
    
    // Ciclo IX
    'cirugia_general': 'Cirugía General',
    'cirugia_aparto_digestivo': 'Cirugía del Aparato Digestivo',
    'especialidades_quirurgicas': 'Especialidades Quirúrgicas',
    'casos_quirurgicos': 'Casos Quirúrgicos',
    'tecnica_operatoria': 'Técnica Operatoria',
    'cuidados_paliativos': 'Cuidados Paliativos',
    'otorrinolaringologia': 'Otorrinolaringología',
    
    // Ciclo X
    'pediatria_1': 'Pediatría General I',
    'pediatria_2': 'Pediatría General II',
    'neonatologia': 'Neonatología',
    'emergencias_medicas': 'Emergencias Médicas',
    'medicina_legal': 'Medicina Legal',
    'genetica_medica': 'Genética Médica',
    
    // Ciclo XI
    'ginecologia': 'Ginecología',
    'obstetricia': 'Obstetricia',
    'salud_publica_2': 'Salud Pública II',
    'medicina_familiar': 'Medicina Familiar',
    'gestion_servicios': 'Gestión en Servicios de Salud',
    'telemedicina': 'Telemedicina',
    
    // Ciclo XII
    'internado_1': 'Internado Médico I',
    'internado_2': 'Internado Médico II',
    'trabajo_investigacion': 'Trabajo de Investigación',
    
    // Electivas
    'anatomia_aplicada': 'Anatomía Aplicada',
    'fisico_quimica_medica': 'Físico Química Médica',
    'software_estadistico': 'Software Estadístico',
    'redaccion_cientifica': 'Redacción Científica',
    'salud_global': 'Salud Global',
    'etica_profesionalismo': 'Ética y Profesionalismo'
  };
  
  return nombres[id] || id;
}

function getRequisitosText(cursoId) {
  if (!mallaData.requisitos[cursoId]) return 'No tiene requisitos';
  
  if (mallaData.requisitos[cursoId].includes('asignaturas_ciclos_I_a_V')) {
    return 'Requisitos: Aprobar todas las asignaturas de los ciclos I al V';
  }
  
  if (mallaData.requisitos[cursoId].includes('asignaturas_ciclos_I_a_XI')) {
    return 'Requisitos: Aprobar todas las asignaturas de los ciclos I al XI';
  }
  
  return `Requisitos: ${mallaData.requisitos[cursoId].map(getNombreCurso).join(', ')}`;
}

// Iniciar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', init);
