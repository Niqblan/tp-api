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
          <span className="title">Sign up</span>
          <span className="subtitle">Create a account </span>
          <div className="form-container">
            <input type="text" className="input" placeholder="Full Name" name="fullName" />
            <input type="User" className="input" placeholder="UserName" name="Usuario" />
            <input type="password" className="input" placeholder="Password" name="password" />
          </div>
          <button type="submit">Sign up</button>
        </form>   
        <div className="form-section">
          <p>Have an account? <Link href={"/signIn"}>Log in</Link> </p>
        </div>
      </div>
    </div>
  );
}





