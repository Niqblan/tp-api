'use client'
import Link from 'next/link';
import '../globals.css';
import {useState, useContext} from 'react'
import { AuthContext } from '../context/Context';
import { useRouter } from 'next/navigation';
import swal from 'sweetalert';
import { users } from '../Mock/mockdate';

export default function Login() {

  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
  const isAdmin = await login({ email, password });

  if (isAdmin !== false) {
    // Si el email y usuario son correctos
    if (isAdmin=='admin') {
      // Si el usuario es administrador, redirige a la página de administrador
      router.push('../admin');
      console.log('Inicio de sesión exitoso para administrador');
    } else {
      // Si el usuario no es administrador, redirige a la página principal
      router.push('../');
      console.log('Inicio de sesión exitoso para usuario no administrador');
    }
  } else {
    // Muestra una alerta cuando el email o la contraseña son incorrectos
    swal('El email o la contraseña son incorrectos', '', 'error');
    console.log('Inicio de sesión fallido');
  }
};

  return (
    <div className="flex flex-col justify-center gap-10 items-center bg-[#8ec7ec] h-[100vh] w-[100vw] font-sans pb-10">
      <h1 className='titulo'>Sistema de Reclamos</h1>
      <div className="form-box">
        <form className="form">
          <span className="title">Inicia sesión</span>
          <div className="form-container">
            <input type="email" className="input" placeholder="Email" name="email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" className="input" placeholder="Contraseña" name="password" onChange={(e) => setPassword(e.target.value)}  />
          </div>
          
          <button type="button" onClick={handleLogin}>Iniciar sesión</button>
      
        </form>
        <div className="form-section">
          <p>No tienes cuenta? <Link href="/signUp">Registrate!</Link></p>
        </div>
      </div>
    </div>
  );
}

