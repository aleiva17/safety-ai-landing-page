
const Us = ():JSX.Element => {
  return (
    <main className="flex flex-col justify-center items-center bg-primary pb-8 px-8 gap-12">
      <h1 className="text-white text-center max-w-[700px] text-3xl md:text-6xl font-bold py-8 border-b-2">Nosotros</h1>
      <section className="grid grid-cols-1 md:grid-cols-2 w-full md:w-3/5 items-center gap-8 md:gap-0">
        <p className="text-white text-center text-xl">Safety AI es una startup que surgió en el año 2022 juntando el mejor talento en el área de inteligencia artificial para brindar soluciones de software a empresas que les gusten innovar con el fin de mejorar la calidad de vida de las personas.</p>
        <div className="flex justify-center w-full">
          <img className="w-52 h-52 bg-white rounded-full p-12" src="artificial-intelligence.png" alt="AI Icon" />
        </div>
      </section>
      <section className="flex flex-wrap justify-center w-full gap-4">
        <h2 className="text-white text-center text-xl md:text-3xl font-semibold w-96">Algunas de las empresas que confían en nosotros</h2>
        <div className="flex flex-wrap items-center justify-center bg-white w-fit rounded-xl gap-8 p-4">
          <img className="max-h-16 w-auto" src="rimac-logo.png" alt="Logo Rimac Seguros" />
          <img className="max-h-16 w-auto" src="falabella-logo.png" alt="Logo Seguros Falabella Seguros" />
          <img className="max-h-16 w-auto" src="pacifico-logo.jpg" alt="Logo Pacífico Seguros" />
        </div>
      </section>
      <section className="flex flex-row-reverse justify-around items-center flex-wrap gap-8">
        <p className="max-w-[720px] text-center text-white text-xl">No sólo nuestros clienten aman nuestro trabajo, a nuestro equipo también le encanta formar parte de la familia Safety AI.Ellos son el centro de todo lo que hacemos.</p>
        <div className="flex justify-center gap-8">
          <img className="max-w-[192px] w-1/2 h-auto" src="people.png" alt="People icon" />
          <img className="max-w-[192px] w-1/2 h-auto" src="love.png" alt="Love icon" />
        </div>
      </section>
    </main>
  )
}

export default Us