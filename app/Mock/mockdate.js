// userMockData.js
export const users = [
    {
      id: 1,
      name: 'admin',
      lastName: '',
      email: 'admin@example.com',
      password: '123',
      optCode: 1234,
      optExpiration: '2023-06-30',
      isAdmin: true,
    },
    {
    id:2,
    name: 'María',
    lastName: 'González',
    email: 'maria@example.com',
    password: '456',
    optCode: 5678,
    optExpiration: '2023-06-30',
    isAdmin: false,
  },
  {
    id:3,
    name: 'Juan',
    lastName: 'Pérez',
    email: 'juan@example.com',
    password: '789',
    optCode: 9128,
    optExpiration: '2023-06-30',
    isAdmin: false,
  },
  ];

  
  export const reclamo = [
    {
    titulo: 'Falla en sisterna',
    descripcion: 'Se me ha presentado una falla en la sisterna de mi unidad ocasionando que no pueda realizar las tareas del hogar de manera regular',
    edificio: 'SLS Puerto Madero',
    piso: 3,
    unidad : 1,
    persona: 'inquilino',
    estado: "Pendiente"
    },
    {
      titulo: 'Falla en sistema eléctrico',
      descripcion: 'He experimentado problemas en el suministro eléctrico de mi unidad, lo que está afectando mi rutina diaria. Necesito asistencia para resolver este problema.',
      edificio: 'The Link Towers',
      piso: 6,
      unidad: 3,
      persona: 'propietario',
      estado: 'Desestimado',
    },
    {
      titulo: 'Fuga de agua en el baño',
      descripcion: 'Hemos detectado una fuga de agua en el baño de la unidad. Necesitamos una reparación urgente para evitar daños mayores.',
      edificio: 'Dique Dos',
      piso: 4,
      unidad: 2,
      persona: 'inquilino',
      estado: 'En proceso',
    },
    {
      titulo: 'Ruido excesivo en áreas comunes',
      descripcion: 'Se ha vuelto insoportable el nivel de ruido en las áreas comunes del edificio, especialmente en la piscina. Necesitamos medidas para mantener la tranquilidad en el lugar.',
      edificio: 'Libertador Plaza',
      piso: null,
      unidad: null,
      persona: 'inquilino',
      estado: 'Terminado',
    },
    {
      titulo: 'Problemas con el ascensor',
      descripcion: 'El ascensor en el edificio se ha descompuesto y no está funcionando. Esto está causando inconvenientes a los residentes que necesitan usarlo.',
      edificio: 'Chateau Libertador',
      piso: 8,
      unidad: 3,
      persona: 'inquilino',
      estado: 'Abierto',
    },


  ]

  export const unidades = [
    {
      id: 1,
      piso: 3,
      habilitado: true,
      codigoEdificio: 145,
      numero: 31,
    },
    {
      id: 2,
      piso: 5,
      habilitado: false,
      codigoEdificio: 754,
      numero: 51,
    },
    {
      id: 3,
      piso: 2,
      habilitado: true,
      codigoEdificio: 107,
      numero: 22,
    },
    {
      id: 4,
      piso: 4,
      habilitado: false,
      codigoEdificio: 303,
      numero: 41,
    },
    {
      id: 5,
      piso: 2,
      habilitado: true,
      codigoEdificio: 420,
      numero: 21,
    }
  ]
  
export const inquilinos = [
  {
    id:1,
    identificador: 14,
    DNI: 26486899,
  },
  {
    id:2,
    identificador: 7,
    DNI: 22776843,
  },
  {
    id:3,
    identificador: 10,
    DNI: 29485599,
  }
]

export const duenio = [
  {
    id:3,
    identificador: 10,
    DNI: 29485599,
  },
  {
    id:3,
    identificador: 10,
    DNI: 29485599,
  },
  {
    id:3,
    identificador: 10,
    DNI: 29485599,
  }
]

export const edificio = [
  {
    id:1,
    nombre:'SLS Puerto Madero',
    direccion:'Mogliani 425',
  },
  {
    id:2,
    nombre:'The Link Towers',
    direccion:'Arrayanes 1230'
  },
  {
    id:3,
    nombre:'The Fire Place',
    direccion:'Bombares 50'
  },
  {
    id:4,
    nombre:'Alvear Tower',
    direccion:'Alvear 100'
  },
  {
    id:5,
    nombre:'Dique Dos',
    direccion:'Maquinista Savio 990'
  },
  {
    id:6,
    nombre:'Libertador Plaza',
    direccion:'Libertador 5600'
  },
  {
    id:7,
    nombre:'Chateau Libertador',
    direccion:'Libertador 5400'
  },
  {
    id:8,
    nombre:'The Tower',
    direccion:'Parana 300'
  },
  {
    id:9,
    nombre:'Lizard Plaza',
    direccion:'Lizard 1000'
  },
]
