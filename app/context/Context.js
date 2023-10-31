'use client'
import { createContext, useContext, useState } from 'react';
import { users } from '../Mock/mockdate';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [reclamos, setReclamos] = useState([]); 

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




