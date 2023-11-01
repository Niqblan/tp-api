'use client'
import { useParams, useRouter } from "next/navigation"

export default function edificio(){
    const router = useRouter();
    const {id} = useParams();

    return (
        <div className="flex flex-col items-center bg-[#8ec7ec] h-[100vh] w-[100%]">
          <h1 className="titulo mt-[50px]">Editar edificio {id}</h1>
          <div className="container mt-4">
          </div>
        </div>
      );
}