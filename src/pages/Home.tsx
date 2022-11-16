import { Link } from "react-router-dom"

const Home = ():JSX.Element => {
  return (
    <main className="flex flex-wrap justify-center items-center gap-12 bg-primary px-4 pb-8">
      <div className="flex flex-col justify-center items-center gap-8">
        <h1 className="text-white max-w-[1000px] text-3xl text-center md:text-left md:text-6xl font-bold py-8 border-b-2">El futuro de la inteligencia artificial está aquí</h1>
        <img className="md:hidden bg-white w-72 h-72 rounded-3xl p-8" src="/ai-brain.png" alt="Logo AI Brain" />
        <p className="text-white max-w-[1000px] text-xl text-center md:text-left">Safety AI es una empresa dedicada en brindar software innovador como servicio a empresas que busquen mejoran la calidad de sus servicios por medio de inteligencia artificial.</p>
        <Link className="py-3 px-4 bg-yellow-500 md:self-start hover:bg-yellow-400 duration-300 rounded-lg text-primary font-semibold" to="/nosotros">Conocer más</Link>
      </div>
      <img className="hidden md:flex bg-white w-72 h-72 rounded-3xl p-8" src="/ai-brain.png" alt="Logo AI Brain" />
    </main>
  )
}

export default Home