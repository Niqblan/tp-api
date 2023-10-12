import Menu from "./components/Menu";

export default function Home() {
  return ( 
  <div className="flex flex-col gap-3 items-center bg-[#79AC78] h-[100vh] w-[100vw] font-sans pb-10 " >
    <h1 className="font-bold text-[40px] mt-20">Menu principal</h1>
    <Menu/>



  </div>
    
  )
}
