import React from 'react';
import Link from 'next/link';
import '../globals.css';

export default function Login() {
  return (
    <div className="flex flex-col justify-center gap-10 items-center bg-[#8ec7ec] h-[100vh] w-[100vw] font-sans pb-10 " >
      <h1 className='titulo'>Sistema de Reclamos</h1>
      <div className="form-box">
        <form className="form">
          <span className="title">Log In</span>
          <div className="form-container">
            <input type="email" className="input" placeholder="Username" name="username" />
            <input type="password" className="input" placeholder="Password" name="password" />
          </div>
          <button type="submit">Log in</button>
        </form>
        <div className="form-section">
          <p>Don t have an account? <Link href="./signUp">Sign up</Link></p>
        </div>
      </div>
    </div>
  );
}

