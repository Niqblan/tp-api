'use client'
import React from 'react';
import '../globals.css'
import Link from 'next/link';

export default function signIn () {
  return (
    <div className="flex flex-col justify-center gap-10 items-center bg-[#8ec7ec] h-[100vh] w-[100vw] font-sans pb-10 " >
      <h1 className='titulo'>Sistema de Reclamos</h1>
      <div className="form-box">
        <form className="form">
          <span className="title">Registrarse</span>
          <span className="subtitle">Crear una cuenta </span>
          <div className="form-container">
            <input type="text" className="input" placeholder="Nombre completo" name="fullName" />
            <input type="User" className="input" placeholder="Email" name="Usuario" />
            <input type="password" className="input" placeholder="Contraseña" name="password" />
            
          </div>
          <Link href={"/"}>
            <button type="submit">Registrarse</button>
          </Link>
          
        </form>   
        <div className="form-section">
          <p>Tienes una cuenta? <Link href={"/signIn"}>Inicia sesión</Link> </p>
        </div>
      </div>
    </div>
  );
}





