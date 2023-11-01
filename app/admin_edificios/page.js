'use client'
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/Context';
import { useRouter } from 'next/navigation';
import { edificio } from '../Mock/mockdate'; // Asegúrate de importar tus datos de edificios aquí.
import Link from 'next/link';

export default function AdminEdificios() {
  const { loggedIn } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!loggedIn) {
      router.push('../signIn');
    }
  }, [loggedIn, router]);

  const [filtroNombre, setFiltroNombre] = useState('');
  const [filtroDireccion, setFiltroDireccion] = useState('');

  const edificiosFiltrados = edificio
    .filter((edificio) =>
      edificio.nombre.toLowerCase().includes(filtroNombre.toLowerCase())
    )
    .filter((edificio) =>
      edificio.direccion.toLowerCase().includes(filtroDireccion.toLowerCase())
    );

  return (
    <div className="flex flex-col items-center bg-[#8ec7ec] h-[100vh] w-[100%]">
      <h1 className="titulo mt-[50px]">Administrar Edificios</h1>
      <Link href={"/admin"} >
            <button className='bg-[#126bf1] text-[#fff] rounded-2xl w-[150px] p-4 absolute top-5 left-5'>Volver</button>
      </Link>
      <div className="container mt-4">
        <form className="flex mb-4 gap-5 mt-10">
          <input
            type="text"
            placeholder="Filtrar por nombre"
            className="py-2 px-4 rounded-lg w-[170px]"
            value={filtroNombre}
            onChange={(e) => setFiltroNombre(e.target.value)}
          />
          <input
            type="text"
            placeholder="Filtrar por dirección"
            className="py-2 px-4 rounded-lg w-[190px]"
            value={filtroDireccion}
            onChange={(e) => setFiltroDireccion(e.target.value)}
          />
        </form>
        <table className="min-w-full rounded-lg shadow-lg">
          <thead>
            <tr className="bg-[#126bf1] text-white">
              <th className="py-4 px-4 text-center">ID</th>
              <th className="py-4 px-4 text-center">Nombre</th>
              <th className="py-4 px-4 text-center">Dirección</th>
              <th className="py-4 px-4 text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {edificiosFiltrados.map((edificio, index) => (
              <tr
                key={edificio.id}
                className={index % 2 === 0 ? 'bg-[#e0ecfb]' : 'bg-[#d9e6fa]'}
              >
                <td className="py-4 px-4 text-center">{edificio.id}</td>
                <td className="py-4 px-4 text-center">{edificio.nombre}</td>
                <td className="py-4 px-4 text-center">{edificio.direccion}</td>
                <td className="py-4 px-4 text-center">
                  <Link href={`/admin_edificios/${edificio.id}`}
                    className="bg-[#126bf1] text-white p-2 rounded-2xl">
                    Editar
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
