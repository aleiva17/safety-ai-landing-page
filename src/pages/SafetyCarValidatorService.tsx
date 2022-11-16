import { Link } from "react-router-dom"
import CardInfo from "../components/CardInfo"

const SafetyCarValidatorService = (): JSX.Element => {
  return (
    <main className="flex flex-col justify-center items-center bg-[#1f1f1f] gap-8 pb-8 px-8">
      <h1 className="text-white text-center text-3xl md:text-6xl font-bold py-8 border-b-2">Safety Car Validator</h1>
      <section className="flex justify-center flex-wrap items-center">
        <p className="text-white text-center text-xl w-full md:w-1/2">Ofrece una alternativa de validación de seguro vehicular en caso de accidentes menores mediante el acceso a nuestra API que está fuertemente apoya en algoritmos de inteligencia artificial.</p>
        <img className="w-56" src="/car-insurance.png" alt="Car insurance icon" />
      </section>
      <section className="flex flex-col items-center gap-8">
        <h2 className="text-white text-3xl font-semibold">Características</h2>
        <div className="flex flex-wrap justify-center gap-16">
          <CardInfo
            title="Fácil de usar"
            imgSrc="/easy-to-use.png"  
            description="Brindamos la mejor documentación actualizada en diferentes idiomas sobre cómo utilizar la API en diversos backend frameworks."
          />
          <CardInfo
            title="Rápido"
            imgSrc="/clock.png"  
            description="Realizamos constantes pruebas y mejoras para tener los tiempos de respuestas más rápidos."
          />
          <CardInfo
            title="Soporte 24/7"
            imgSrc="/technical-support.png"  
            description="Disponemos de un equipo específicamente centrado y capacitado para brindar soporte al implementar la API."
          />
        </div>
      </section>
      <section className="flex flex-wrap items-center justify-center gap-8 mb-8">
        <div className="flex flex-col text-white w-full md:w-1/2 gap-4">
          <h2 className="text-3xl text-center md:text-left font-semibold mb-4">¿Quieres adquirir Safety Car Validator para tu empresa?</h2>
          <p className="text-xl text-center md:text-left">Envíanos un mensaje y un agente especializado se contactará contigo para agendar una reunión para brindarte más información sobre este innovador producto.</p>
          <Link className="bg-yellow-500 self-center md:self-start hover:bg-yellow-400 duration-300 rounded-lg font-semibold py-3 px-6 w-fit text-[#1f1f1f]" to="/contacto">Contáctanos</Link>
        </div>
        <img className="w-56" src="/deal.png" alt="Deal icon" />
      </section>
    </main>
  )
}

export default SafetyCarValidatorService