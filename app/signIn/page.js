'use client'
import Link from 'next/link';
import '../globals.css';
import {useState, useContext} from 'react'
import { AuthContext } from '../context/Context';
import { useRouter } from 'next/navigation';
import swal from 'sweetalert';

export default function Login() {

  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    const success = await login({ email, password });
    if (success) {
      router.push('../'); // Redirige a la página principal si el inicio de sesión es exitoso
      console.log('Inicio de sesión exitoso');
    } else {
      swal('El email o la contraseña son incorrectos', '', 'error');
      console.log('Inicio de sesión fallido');
    }
  };

  return (
    <div className="flex flex-col justify-center gap-10 items-center bg-[#8ec7ec] h-[100vh] w-[100vw] font-sans pb-10">
      <h1 className='titulo'>Sistema de Reclamos</h1>
      <div className="form-box">
        <form className="form">
          <span className="title">Log In</span>
          <div className="form-container">
            <input type="email" className="input" placeholder="Email" name="email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" className="input" placeholder="Password" name="password" onChange={(e) => setPassword(e.target.value)}  />
          </div>
          
          <button type="button" onClick={handleLogin}>Log in</button>
      
        </form>
        <div className="form-section">
          <p>Don t have an account? <Link href="/signUp">Sign up</Link></p>
        </div>
      </div>
    </div>
  );
}

