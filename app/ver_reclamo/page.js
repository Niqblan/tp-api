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
    <div className="flex flex-col items-center bg-[#8ec7ec] h-[100vh] w-[100%]">
      <h1 className="titulo py-11">Mis reclamos</h1>
      <Link href="/">
        <button className="bg-[#126bf1] text-[#fff] rounded-2xl w-[200px] p-4 absolute top-5 left-5">Volver</button>
      </Link>

      <div className="w-[90%] mt-4">
        <table className="min-w-full rounded-lg shadow-lg">
          <thead>
            <tr className="bg-[#126bf1] text-white">
              <th className="py-4 px-4 text-center">Título</th>
              <th className="py-4 px-4 text-center">Tipo</th>
              <th className="py-4 px-4 text-center">Unidad</th>
              <th className="py-4 px-4 text-center">Edificio</th>
              <th className="py-4 px-4 text-center">Piso</th>
              <th className="py-4 px-4 text-center">Estado</th>
            </tr>
          </thead>
          <tbody>
            {reclamos.map((reclamo, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-[#e0ecfb]' : 'bg-[#d9e6fa]'}>
                <td className="py-4 px-4 text-center">{reclamo.titulo}</td>
                <td className="py-4 px-4 text-center">{reclamo.persona}</td>
                <td className="py-4 px-4 text-center">{reclamo.unidad}</td>
                <td className="py-4 px-4 text-center">{reclamo.edificio}</td>
                <td className="py-4 px-4 text-center">{reclamo.piso}</td>
                <td className="py-4 px-4 text-center">{reclamo.estado}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
