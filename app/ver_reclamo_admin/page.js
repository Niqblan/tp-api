import Link from 'next/link'
import React from 'react'
import '../globals.css'

export default function page() {
  return (
    <div className='flex flex-col items-center bg-[#8ec7ec] h-[100vh] w-[100%] '>
        <h1 className='titulo py-11'>Mis reclamos</h1>
        <Link href={"/admin"} >
            <button className='bg-[#126bf1] text-[#fff] rounded-2xl w-[200px] p-4 absolute top-5 left-5'>Volver</button>
        </Link>
    </div>

  )}
