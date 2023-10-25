import MenuAdmin from "../components/MenuAdmin";
import '../globals.css'


export default function HomeAdmin() {
  return ( 
  <div className="flex flex-col justify-center gap-10 items-center bg-[#8ec7ec] h-[100vh] w-[100vw] font-sans pb-10 " >
    <h1 className="titulo">Sistema de Reclamos Admin</h1>
    <MenuAdmin/>

  </div>
    
  )
}