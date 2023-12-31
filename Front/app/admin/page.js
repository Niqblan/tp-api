'use client'
import MenuAdmin from "../components/MenuAdmin";
import '../globals.css'
import { useContext, useEffect } from 'react'
import { AuthContext } from '../context/Context';
import { useRouter } from 'next/navigation';


export default function HomeAdmin() {

  const { loggedIn } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!loggedIn) {
      router.push('../signIn'); 
    }
  }, [loggedIn, router]);


  return ( 
  <div className="flex flex-col justify-center gap-10 items-center bg-[#8ec7ec] h-[100vh] w-[100vw] font-sans pb-10 " >
    <h1 className="titulo">Sistema de Reclamos Admin</h1>
    <MenuAdmin/>

  </div>
    
  )
}