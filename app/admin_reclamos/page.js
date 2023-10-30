'use client'
import '../globals.css'
import { useContext, useEffect } from 'react'
import { AuthContext } from '../context/Context';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Admin_reclamos() {

  const { loggedIn } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!loggedIn) {
      router.push('../signIn'); 
    }
  }, [loggedIn, router]);


  return ( 
  <div className="flex flex-col justify-center gap-10 items-center bg-[#8ec7ec] h-[100vh] w-[100vw] font-sans pb-10 " >
    <h1 className="titulo">Administrar Reclamos</h1>
    <Link href={"/admin"} >
            <button className='bg-[#126bf1] text-[#fff] rounded-2xl w-[150px] p-4 absolute top-5 left-5'>Volver</button>
    </Link>
    



  </div>
    
  )
}