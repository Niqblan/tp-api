'use client'
import Link from 'next/link'
import React from 'react'
import '../globals.css'
import { useContext, useEffect } from 'react'
import { AuthContext } from '../context/Context';
import { useRouter } from 'next/navigation';


export default function page() {

  const { loggedIn, reclamos } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!loggedIn) {
      router.push('../signIn'); 
    }
  }, [loggedIn, router]);


  return (
    <div className='flex flex-col items-center bg-[#8ec7ec] h-[100vh] w-[100%] '>
      <h1 className='titulo py-11'>Mis reclamos</h1>
      <Link href={"/"}>
        <button className='bg-[#126bf1] text-[#fff] rounded-2xl w-[200px] p-4 absolute top-5 left-5'>Volver</button>
      </Link>

      {/* Mostrar los reclamos */}
      <div className="h-[10vh] w-[100vw] flex flex-col gap-[1px] justify-center items-center px-[10%] ">
      <div className="flex w-full bg-[#126bf1] text-white font-bold p-3">
        <div className="w-[40%] pl-10 ">
          <h1>Titulo</h1>
        </div>
        <div className="w-[15%] pl-10 text-center">
          <h1>Unidad</h1>
        </div>
        <div className="w-[15%] pl-10 text-center">
          <h1>Edificio</h1>
        </div>
        <div className="w-[15%] pl-10 text-center">
          <h1>Piso</h1>
        </div>
        <div className="w-[30%] pl-10 text-center">
          <h1>Estado</h1>
        </div>
      </div>
      {reclamos.map((reclamo, index) => {
        return (
          <div className="flex w-full bg-[#d9e6fa] p-2"key={index}>
            <div className="w-[40%] pl-10 ">
              <h1>{reclamo.titulo}</h1>
            </div>
            <div className="w-[15%] pl-10 text-center">
              <h1>{reclamo.unidad}</h1>
            </div>
            <div className="w-[15%] pl-10 text-center">
              <h1>{reclamo.edificio}</h1>
            </div>
            <div className="w-[15%] pl-10 text-center">
              <h1>{reclamo.piso}</h1>
            </div>
            <div className="w-[30%] pl-10 text-center">
              <h1>{reclamo.estado}</h1>
            </div>
          </div>
        );
      })}
    </div>
    </div>
    )
 }
