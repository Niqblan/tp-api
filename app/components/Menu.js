'use client'
import Link from 'next/link'
import React from 'react'
import '../globals.css'
import { AuthContext } from '../context/Context';
import { useRouter } from 'next/navigation';
import { useContext} from 'react'
import swal from 'sweetalert';


export default function Menu() {

  const router = useRouter();
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    // Redirige al usuario a la página de inicio de sesión 
    router.push('./signIn');
    console.log('Se cerro la sesion')
  };

  return (
    <div className='flex flex-col gap-2'>
        <Link href={"/add_reclamo"}><button className='font-bold  px-[100px] py-5 bg-[#126bf1] text-[#ffff] rounded-2xl'>Hacer Reclamo</button> 
        </Link>
        <Link href={"/ver_reclamo"}><button className='font-bold px-[105px] py-5  bg-[#126bf1] text-[#ffff] rounded-2xl '>Ver Reclamos</button>
        </Link>
        <button className='font-bold px-[106px] py-5 bg-[#126bf1] text-[#ffff] rounded-2xl ' onClick={handleLogout} >Cerrar Sesión</button>   
    </div>
  )
}
