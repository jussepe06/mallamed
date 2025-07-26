// Datos completos de la malla curricular con prerrequisitos corregidos
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
    'fisiologia_2_2': 6, // Duplicado por error en el plan?
    'epidemiologia_2': 4,
    'inmunologia_humana': 4,
    'microbiologia_parasitologia': 5,
    'investigacion_clinica': 3,
    'gestion_cientifica': 2,

    // Ciclo VI
    'farmacologia': 5,
    'psicologia_1': 4,
    'fisiopatologia': 5,
    'salud_publica_1_2': 4,
    'bases_documentacion': 3,
    'juegos_olimpicos': 2,

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
    'cuidados_paliativos': 3,

    // Ciclo XI
    'pediatria_1': 5,
    'pediatria_2': 4,
    'neonatologia': 4,
    'emergencias_medicas': 5,
    'medicina_legal': 3,

    // Ciclo XII
    'ginecologia': 5,
    'obstetricia': 5,
    'salud_publica_2': 4,
    'medicina_familiar': 4,
    'gestion_servicios': 3,

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
    
    // Ciclo VI
    'farmacologia': ['farmacologia_general'],
    'fisiopatologia': ['fisiologia_2', 'patologia_general'],
    'bases_documentacion': ['investigacion_clinica'],
    
    // Ciclo VII (requieren todas las básicas)
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
    'endocrinologia': ['fisiologia_2'],
    'infectologia': ['microbiologia_parasitologia', 'inmunologia_humana'],
    
    // Ciclo X
    'cirugia_general': ['gastroenterologia', 'dermatologia'],
    'cirugia_digestiva': ['gastroenterologia'],
    'especialidades_quirurgicas': ['cirugia_general'],
    
    // Ciclo XI
    'pediatria_1': ['cirugia_general'],
    'pediatria_2': ['pediatria_1'],
    'neonatologia': ['pediatria_1'],
    'emergencias_medicas': ['cirugia_general'],
    
    // Ciclo XII
    'ginecologia': ['pediatria_2'],
    'obstetricia': ['ginecologia'],
    'salud_publica_2': ['salud_publica_1'],
    
    // Ciclo XIII (Internado)
    'internado_1': ['ginecologia', 'obstetricia', 'pediatria_2'],
    
    // Ciclo XIV
    'internado_2': ['internado_1'],
    'trabajo_investigacion': ['investigacion_clinica']
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
      cursos: ['fisiologia_2_2', 'epidemiologia_2', 'inmunologia_humana', 
               'microbiologia_parasitologia', 'investigacion_clinica', 'gestion_cientifica']
    },
    {
      id: 6,
      nombre: 'Ciclo VI - Clínico',
      cursos: ['farmacologia', 'psicologia_1', 'fisiopatologia', 
               'salud_publica_1_2', 'bases_documentacion', 'juegos_olimpicos']
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
               'anestesiologia', 'cuidados_paliativos']
    },
    {
      id: 11,
      nombre: 'Ciclo XI - Quirúrgico',
      cursos: ['pediatria_1', 'pediatria_2', 'neonatologia', 
               'emergencias_medicas', 'medicina_legal']
    },
    {
      id: 12,
      nombre: 'Ciclo XII - Quirúrgico',
      cursos: ['ginecologia', 'obstetricia', 'salud_publica_2', 
               'medicina_familiar', 'gestion_servicios']
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

// Función mejorada para verificar prerrequisitos
function cursoDesbloqueado(cursoId) {
  if (!mallaData.requisitos[cursoId]) return true;
  
  // Verificar cada prerrequisito
  return mallaData.requisitos[cursoId].every(req => {
    // Verificar si es un curso aprobado
    if (state.aprobados.includes(req)) return true;
    
    // Verificar si es un conjunto de cursos (ej: "ciclos_I_a_V")
    if (req.includes('ciclos_')) {
      const [_, ciclos] = req.split('ciclos_');
      const [inicio, fin] = ciclos.split('_a_').map(Number);
      
      return Array.from({length: fin - inicio + 1}, (_, i) => inicio + i)
        .every(cicloId => {
          const ciclo = mallaData.ciclos.find(c => c.id === cicloId);
          return ciclo.cursos.every(curso => state.aprobados.includes(curso));
        });
    }
    
    return false;
  });
}
