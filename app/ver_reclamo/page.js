import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div className='flex flex-col items-center bg-[#79AC78] h-[100vh] w-[100%] '>
        <h1 className='font-bold text-[30px] mt-20'>Mis reclamos</h1>
        <Link href={"/"} > 
        {/* ya con que tenga solo la barra te manda directo a app */}
            <button className='bg-[#618264] text-[#B0D9B1] rounded-2xl w-[200px] p-4 absolute top-5 left-5'>Volver</button>
        </Link>
    </div>

  )}
