import CardLink from "../components/CardLink"

const Services = (): JSX.Element => {
  return (
    <main className="flex flex-col items-center justify-center bg-primary py-4 px-8 gap-12">
      <h1 className="text-white text-center max-w-[700px] text-6xl font-bold pb-8 border-b-2">Servicios</h1>
      <p className="text-white text-center text-xl">Actualmente, esta es la lista de servicios que nos encontramos ofreciendo. No dudes en contactar con un agente de surgir alguna consulta o duda.</p>
      <section className="flex flex-wrap justify-center gap-12">
        <CardLink
          title="Actualmente en desarrollo"
          imgSrc="construction.png"
          redirectName="Notifícame"
          redirectUrl="/contacto"
        />
        <CardLink
          title="Safety Car Validator"
          imgSrc="safety-car-validator.png"
          redirectName="Conocer más"
          redirectUrl="/servicios/safety-car-validator"
        />
        <CardLink
          title="Actualmente en desarrollo"
          imgSrc="construction.png"
          redirectName="Notifícame"
          redirectUrl="/contacto"
        />
      </section>
    </main>
  )
}

export default Services