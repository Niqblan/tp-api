import Link from 'next/link'
import React from 'react'

export default function Menu() {
  return (
    <div className='flex flex-col gap-2 '>
        <Link href={"/add_reclamo"}><button className='font-bold  px-[100px] py-5 bg-[#618264] text-[#B0D9B1] rounded-2xl'>Hacer Reclamo</button> 
        </Link>
        <Link href={"/ver_reclamo"}><button className='font-bold px-[105px] py-5  bg-[#618264] text-[#B0D9B1] rounded-2xl '>Ver Reclamos</button>
        </Link>
        <Link href={"/"}><button className='font-bold px-[106px] py-5 bg-[#618264] text-[#B0D9B1] rounded-2xl '>Cerrar Sesión</button>
        </Link>
        
    </div>
  )
}
