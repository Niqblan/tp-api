import Link from 'next/link'
import React from 'react'
import '../globals.css'

export default function page() {
  return (
    <div className='flex flex-col gap-3 items-center bg-[#8ec7ec] h-[100vh] w-[100%] py-12'>
      <h1 className='titulo'>Hacer un reclamo</h1>
      <form className= "flex flex-col gap-6 font-semibold pb-10 py-5" >
        <div>
          <h1 className='text-white'>Título del reclamo</h1>
          <input className="bg-[#fff] px-2 py-1 w-[500px] rounded-md" type="text" />
        </div>
        <div>
          <h1 className='text-white'>Descripción del reclamo</h1>
          <textarea className="bg-[#fff] px-2 w-[500px] h-[200px] py-1 rounded-md" type="text" />
        </div>
        <div>
          <h1 className='text-white'>Ubicación</h1>
          <input className='bg-[#fff] px-2 py-1 w-[500px] rounded-md' type="text" />
        </div>
        <div>
          <h1 className='text-white'>Seleccionar unidad</h1>
          <select className='bg-[#fff]'>
            <option>Unidad 1</option>
            <option>Unidad 2</option>
            <option>Unidad 3</option>
            <option>Unidad 4</option>
          </select>
        </div>
        <div>
          <h1 className='text-white'>Subir imagenes</h1>
          <input className='text-white' type="file" multiple/>
        </div>
        {/* py vertical, px horizontal
         padding : separacion interna de la etiqueta
         margin: separacion externa de  la etiqueta, con el entorno
        font-bold text-[30px] mt-20*/}
         <div className='flex gap-2'>
          <button className='bg-[#126bf1] text-[#fff] rounded-2xl w-[200px] p-4'>Confirmar reclamo</button>
          <Link href={"/"} >
            <button className='bg-[#eb4343] text-[#ffffff] rounded-2xl w-[200px] p-4'>Cancelar</button>
          </Link>
         
         </div>
        
      </form>

    </div>
  )
}
