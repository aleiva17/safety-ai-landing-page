import ContactForm from "../components/ContactForm"

const Contact = (): JSX.Element => {
  return (
    <main className="flex flex-col items-center justify-center bg-primary px-4 pb-8 gap-12">
      <h1 className="text-white text-center text-3xl md:text-6xl font-bold py-8 border-b-2">Contacto</h1>
      <div>
        <p className="text-white text-xl text-center">¿Tienes interés o alguna duda/sugerencia sobre los servicios que ofrecemos?</p>
        <p className="text-white text-xl text-center mt-4">Por favor, envíanos un mensaje con lo que tengas que expresar. Estaremos encantados de leerte y brindarte una respuesta.</p>
      </div>
      <section className="flex items-center justify-center w-full">
        <div className="hidden md:flex justify-center items-center bg-white rounded-2xl md:pl-6 lg:pl-12">
          <img className="max-w-64 w-full h-auto max-h-64" src="boy-writing.jpg" alt="Boy writing icon" />
        </div>
        <ContactForm />
        <div className="hidden md:flex justify-center items-center bg-white rounded-2xl md:pr-6 lg:pr-12">
          <img className="max-w-64 w-full h-auto max-h-64" src="girl-writing.jpg" alt="Girl writing icon" />
        </div>
      </section>
    </main>
  )
}

export default Contact