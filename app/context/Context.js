'use client'
import { createContext, useContext, useState } from 'react';
import { users } from '../Mock/mockdate';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [reclamos, setReclamos] = useState([]); 

  const [edificios, setEdificios] = useState([
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
  ])



  // Función para buscar un edificio por su ID
  const buscarEdificioPorId = (edificioId) => {
    const edificio = edificios.find((e) => e.id === edificioId);
    return edificio;
  };

  // Función para agregar un nuevo edificio
  const agregarEdificio = (nuevoEdificio) => {
    setEdificios([...edificios, nuevoEdificio]);
  };

  // Función para modificar un edificio existente
  const modificarEdificio = (edificioId, nuevoEdificio) => {
    const edificiosActualizados = edificios.map((e) => {
      if (e.id === edificioId) {
        return { ...e, ...nuevoEdificio };
      }
      return e;
    });
    setEdificios(edificiosActualizados);
  };

  //login
  const login = (userData) => {
    const user = users.find((u) => u.email === userData.email && u.password === userData.password);
    if (user) {
      setUser(user);
      setLoggedIn(true);
      if(user.isAdmin){
        return 'admin'; // usuario es administrador
      }else{
        return 'noAdmin';
      }
      
    } else {
      setUser(null);
      setLoggedIn(false);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    setLoggedIn(false);
    // Limpiar los reclamos al cerrar sesión
    //En el caso de no querer que se borre, lo saco
    setReclamos([]);
  };

  const agregarReclamo = (reclamo) => {
    setReclamos([...reclamos, reclamo]);
  };

  return (
    <AuthContext.Provider value={{ user, loggedIn, login, logout, reclamos, agregarReclamo }}>
      {children}
    </AuthContext.Provider>
  );
};




