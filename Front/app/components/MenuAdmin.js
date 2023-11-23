'use client'
import Link from 'next/link'
import React, { useContext } from 'react'
import '../globals.css'
import { useRouter } from 'next/navigation';
import { AuthContext } from '../context/Context';
import swal from "sweetalert2";


export default function Menu() {

  const router = useRouter();
  const {logout} = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    // Redirige al usuario a la página de inicio de sesión 
    router.push('./signIn');
    swal.fire('Debe Iniciar Sesión')
    console.log('Se cerro la sesion')
  };

  return (
    <div className='flex flex-col gap-4 items-center'>
      <div className='flex flex-row gap-4 '>
      <div className="flex flex-col gap-2">
        <Link href={"/admin_edificios"}>
          <button className='font-bold px-[70px] py-5 bg-[#126bf1] text-[#ffff] rounded-2xl'>Administrar Edificios</button>
        </Link>
        <Link href={"/admin_unidades"}>
          <button className='font-bold px-[67px] py-5 bg-[#126bf1] text-[#ffff] rounded-2xl'>Administrar Unidades</button>
        </Link>
      </div>
      <div className="flex flex-col gap-2">
        <Link href={"/add_reclamo_admin"}>
          <button className='font-bold px-[100px] py-5 bg-[#126bf1] text-[#ffff] rounded-2xl top-7'>Hacer Reclamo</button>
        </Link>
        <Link href={"/ver_reclamo_admin"}>
          <button className='font-bold px-[105px] py-5 bg-[#126bf1] text-[#ffff] rounded-2xl'>Ver Reclamos</button>
        </Link>  
      </div>
      </div>
        <button className='font-bold px-[106px] py-5 bg-[#126bf1] text-[#ffff] rounded-2xl' onClick={handleLogout}>Cerrar Sesión</button>
    </div>
  );
}
