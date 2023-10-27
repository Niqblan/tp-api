'use client'
import Menu from "./components/Menu";
import './globals.css'
import { useContext, useEffect } from 'react';
import { AuthContext } from './context/Context';
import { useRouter } from 'next/navigation';
import swal from "sweetalert2";

export default function Home() {
  
  const router = useRouter();
  const { loggedIn } = useContext(AuthContext);

  useEffect(() => {
    // Verifica si el usuario inicio sesion 
    if (!loggedIn) {
      router.push('/signIn');
      swal.fire('Debe Iniciar Sesión')
    }
  }, [loggedIn]);


  return ( 
  <div className="flex flex-col justify-center gap-10 items-center bg-[#8ec7ec] h-[100vh] w-[100vw] font-sans pb-10 " >
    <h1 className="titulo">Sistema de Reclamos</h1>
    <Menu/>



  </div>
    
  )
}
