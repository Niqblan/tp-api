'use client'
import { createContext, useContext, useState } from 'react';
import { users } from '../Mock/mockdate';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

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
  };

  return (
    <AuthContext.Provider value={{ user, loggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};




