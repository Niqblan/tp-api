"use client"
import Link from 'next/link'
import React from 'react'
import '../globals.css'
import { useState, useContext, useEffect } from 'react'
import { AuthContext } from '../context/Context';
import { useRouter } from 'next/navigation';
import { edificio } from '../Mock/mockdate'

export default function page() {

  const { loggedIn, agregarReclamo } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!loggedIn) {
      router.push('../signIn'); 
    }
  }, [loggedIn, router]);

  const [files, setFiles] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);


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

      setImageURLs(data.urls);
      console.log("URLs:", data.urls);

      // Agregar el reclamo al contexto
      const reclamo = {
        titulo: /* Obtén el título del reclamo */ document.querySelector('input[type="text"]').value,
        descripcion: /* Obtén la descripción del reclamo */ description,
        edificio: edificio,
        piso: piso,
        imagenes: imageURLs,
        unidad : unidad,
        persona: persona,
        estado: "Pendiente"


      }
      agregarReclamo(reclamo);
      console.log(reclamo)

      router.push('/');
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

  const [edificio, setEdificio] = useState('');
  const handleEdificio = (e) => {
    setEdificio(e.target.value)
  }
  
  const [piso, setPiso] = useState('');
  const handlePiso = (e) => {
    setPiso(e.target.value)
  }

  const [unidad, setUnidad] = useState('');
  const handleUnidad = (e) => {
    setUnidad(e.target.value)
  }

  const [persona, setPersona] = useState('');
  const handlePersona = (e) => {
    setPersona(e.target.value)
  }





  return (
    <div className='flex flex-col gap-3 items-center bg-[#8ec7ec] h-[100vh] w-[100%] py-12'>
      <h1 className='titulo'>Hacer un reclamo</h1>
      <Link href={"/"} >
            <button className='bg-[#126bf1] text-[#fff] rounded-2xl w-[150px] p-4 absolute top-5 left-5'>Volver</button>
      </Link>
      <form className= "flex flex-col gap-6 font-semibold pb-10 py-5" onSubmit={(e) => {e.preventDefault(); }}>
        <div>
          <h1 className='text-white'>Título del reclamo</h1>
          <input className="bg-[#fff] px-2 py-1 w-[500px] rounded-md" type="text" />
        </div>
        <div>
          <h1 className='text-white'>Descripción del reclamo</h1>
          <textarea className="bg-[#fff] px-2 w-[500px] h-[200px] py-1 rounded-md" value={description} onChange={(e) => handleDescriptionChange(e)}/>
          <p className='text-white ml-[410px]'>{description.length} / {maxLength} </p>
        </div>
        <div className="flex space-x-4 mt-4">
          <label className="block text-white">Edificio:</label>
          <input className="bg-[#fff] px-2 py-1 w-full rounded-md" type="texto" onChange={(e) => handleEdificio(e)} />
        
        <h1 className='text-white'>Piso:</h1>
          <select className='bg-[#fff] w-[50px] h-7' onChange={(e) => handlePiso(e)}>
            <option>-</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
          </div>
        <div className='flex gap-7'>
          <h1 className='text-white'>Seleccionar unidad</h1>
          <select className='bg-[#fff]' onChange={(e) => handleUnidad(e)}>
            <option>-</option>
            <option> 1</option>
            <option> 2</option>
            <option> 3</option>
            <option> 4</option>
          </select>
          <select className='bg-[#fff]' onChange={(e) => handlePersona(e)}>
            <option>Seleccionar</option>
            <option> Propietario</option>
            <option> Inquilino</option>
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
