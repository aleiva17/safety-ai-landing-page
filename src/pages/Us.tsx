
const Us = ():JSX.Element => {
  return (
    <main className="flex flex-col justify-center items-center bg-primary py-4 px-8 gap-12">
      <h1 className="text-white text-center max-w-[700px] text-6xl font-bold pb-8 border-b-2">Nosotros</h1>
      <section className="grid grid-cols-2 w-3/5 items-center">
        <p className="text-white text-xl">Safety AI es una startup que surgió en el año 2022 juntando el mejor talento en el área de inteligencia artificial para brindar soluciones de software a empresas que les gusten innovar con el fin de mejorar la calidad de vida de las personas.</p>
        <div className="flex justify-center w-full">
          <img className="w-52 h-52 bg-white rounded-full p-12" src="artificial-intelligence.png" alt="AI Icon" />
        </div>
      </section>
      <section className="flex justify-center gap-4">
        <h2 className="text-white text-3xl font-semibold w-96">Algunas de las empresas que confían en nosotros</h2>
        <div className="flex flex-wrap bg-white w-fit rounded-xl gap-8 p-4">
          <img className="h-16" src="rimac-logo.png" alt="Logo Rimac Seguros" />
          <img className="h-16" src="pacifico-logo.jpg" alt="Logo Pacífico Seguros" />
          <img className="h-16" src="falabella-logo.png" alt="Logo Seguros Falabella Seguros" />
        </div>
      </section>
      <section className="flex flex-row-reverse justify-around items-center flex-wrap gap-8">
        <p className="max-w-[720px] text-white text-xl">No sólo nuestros clienten aman nuestro trabajo, a nuestro equipo también le encanta formar parte de la familia Safety AI.Ellos son el centro de todo lo que hacemos.</p>
        <div className="flex gap-8">
          <img className="h-48" src="people.png" alt="People icon" />
          <img className="h-48" src="love.png" alt="Love icon" />
        </div>
      </section>
    </main>
  )
}

export default Us