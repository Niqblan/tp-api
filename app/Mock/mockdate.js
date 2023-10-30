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

  export const unidades = [
    {
      id: 1,
      piso: 3,
      habilitado: true,
      codigoEdificio: 145,
      numero: 5,
    },
    {
      id: 2,
      piso: 5,
      habilitado: false,
      codigoEdificio: 754,
      numero: 5,
    },
    {
      id: 3,
      piso: 2,
      habilitado: true,
      codigoEdificio: 107,
      numero: 5,
    },
    {
      id: 4,
      piso: 4,
      habilitado: false,
      codigoEdificio: 303,
      numero: 5,
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
