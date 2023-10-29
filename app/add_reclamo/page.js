"use client"
import Link from 'next/link'
import React from 'react'
import '../globals.css'
import { useState, useContext, useEffect } from 'react'
import { AuthContext } from '../context/Context';
import { useRouter } from 'next/navigation';

export default function page() {

  const { loggedIn } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!loggedIn) {
      router.push('../signIn'); 
    }
  }, [loggedIn, router]);

  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    setFiles(Array.from(e.target.files));
  };

  const handleUpload = async () => {
    const formData = new FormData();

    files.forEach((file, index) => {
      formData.append(`image${index + 1}`, file);
    });

    try {
      const response = await fetch("/api/upload", { method: "POST", body: formData });
      const data = await response.json();

      console.log("URLs:", data.urls);

    } catch (error) {
      console.error("Error:", error);
    }
  };

  //contador de palabras en descripcion
  const [description, setDescription] = useState('');
  const maxLength = 1000; 

  const handleDescriptionChange = (e) => {
    const text = e.target.value;
    
    if (text.length <= maxLength) {
      setDescription(text);
    }
  };

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
          <textarea className="bg-[#fff] px-2 w-[500px] h-[200px] py-1 rounded-md" value={description} onChange={handleDescriptionChange}/>
          <p className='text-white ml-[410px]'>{description.length} / {maxLength} </p>
        </div>
        <div className="flex space-x-4 mt-4">
        <div className="w-1/2 ">
          <label className="block text-white">Edificio:</label>
          <input className="bg-[#fff] px-2 py-1 w-full rounded-md" type="text" />
        </div>
        <div className="w-1/2">
          <label className="block text-white">Piso:</label>
          <input className="bg-[#fff] px-2 py-1 w-full rounded-md" type="text" />
        </div>
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
          <h1 className='text-white '>Subir</h1>
          <input className='text-white' type="file" multiple onChange={handleFileChange}/>
        </div>

         <div className='flex gap-2'>
          <button onClick={handleUpload} className='bg-[#126bf1] text-[#fff] rounded-2xl w-[200px] p-4'>Confirmar reclamo</button>
          <Link href={"/"} >
            <button className='bg-[#eb4343] text-[#ffffff] rounded-2xl w-[200px] p-4 top-2'>Cancelar</button>
          </Link>
         
         </div>
        
      </form>

    </div>
  )
}
