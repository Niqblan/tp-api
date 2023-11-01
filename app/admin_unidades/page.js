'use client'
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/Context';
import { useRouter } from 'next/navigation';
import { unidades as unidadesData } from '../Mock/mockdate';
import Link from 'next/link';

export default function AdminUnidades() {
  const { loggedIn } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!loggedIn) {
      router.push('../signIn');
    }
  }, [loggedIn, router]);

  const [filtroPiso, setFiltroPiso] = useState('');
  const [filtroHabilitado, setFiltroHabilitado] = useState('Todos');

  const unidades = unidadesData
    .filter((unidad) => unidad.piso.toString().includes(filtroPiso))
    .filter((unidad) =>
      filtroHabilitado === 'Todos'
        ? true
        : filtroHabilitado === 'Habilitado'
        ? unidad.habilitado
        : !unidad.habilitado
    );

  return (
    <div className="flex flex-col items-center bg-[#8ec7ec] h-[100vh] w-[100%]">
      
      <h1 className="titulo mt-[80px]">Administrar Unidades</h1>
      <Link href={"/admin"} >
            <button className='bg-[#126bf1] text-[#fff] rounded-2xl w-[150px] p-4 absolute top-5 left-5'>Volver</button>
        </Link>
      <div className="container mt-4">
        <form className="flex mb-4 gap-2 mt-20">
            <input
              type="text"
              placeholder="Filtrar por piso"
              className="py-2 px-4 rounded-lg w-[150px]"
              value={filtroPiso}
              onChange={(e) => setFiltroPiso(e.target.value)}
            />
            <select
              className="py-2 px-4 rounded-lg w-[170px]"
              value={filtroHabilitado}
              onChange={(e) => setFiltroHabilitado(e.target.value)}
            >
              <option value="Todos">Todos</option>
              <option value="Habilitado">Habilitado</option>
              <option value="No Habilitado">No Habilitado</option>
            </select>
        </form>
        <table className="min-w-full rounded-lg shadow-lg">
          <thead>
            <tr className="bg-[#126bf1] text-white">
              <th className="py-4 px-4 text-center">Unidad</th>
              <th className="py-4 px-4 text-center">Piso</th>
              <th className="py-4 px-4 text-center">Habilitado</th>
              <th className="py-4 px-4 text-center">Número</th>
              <th className="py-4 px-4 text-center">Código de Edificio</th>
              <th className="py-4 px-4 text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {unidades.map((unidad, index) => (
              <tr
                key={unidad.id}
                className={index % 2 === 0 ? 'bg-[#e0ecfb]' : 'bg-[#d9e6fa]'}
              >
                <td className="py-4 px-4 text-center">{`${unidad.id}`}</td>
                <td className="py-4 px-4 text-center">{unidad.piso}</td>
                <td className="py-4 px-4 text-center">
                  {unidad.habilitado ? 'Sí' : 'No'}
                </td>
                <td className="py-4 px-4 text-center">{unidad.numero}</td>
                <td className="py-4 px-4 text-center">{unidad.codigoEdificio}</td>
                <td className="py-4 px-4 text-center">
                <Link href={`/admin_unidades/${unidad.id}`}
                    className="bg-[#126bf1] text-white p-2 rounded-2xl">
                    Editar
                </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mb-20 mt-20"></div>
    </div>
  );
}