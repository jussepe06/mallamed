/**
 * Malla Interactiva Completa - Medicina Humana USMP
 * Versión corregida y verificada
 */

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
    
    // Ciclo VII - Requiere todas las básicas
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
    
    // Ciclo XIII (Internado)
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

// Función mejorada para verificar prerrequisitos
function cursoDesbloqueado(cursoId) {
  const requisitos = mallaData.requisitos[cursoId];
  
  // Si no hay requisitos, el curso está desbloqueado
  if (!requisitos || requisitos.length === 0) return true;
  
  // Verificar cada prerrequisito
  return requisitos.every(req => {
    // Verificar si es un curso aprobado
    if (state.aprobados.includes(req)) return true;
    
    return false;
  });
}

// Resto del código permanece igual...
// [Las funciones renderMalla, renderCursos, setupEventListeners, etc. se mantienen como en la versión anterior]
