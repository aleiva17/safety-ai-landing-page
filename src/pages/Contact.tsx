import ContactForm from "../components/ContactForm"

const Contact = (): JSX.Element => {
  return (
    <main className="flex flex-col items-center justify-center bg-primary py-4 px-8 gap-12">
      <h1 className="text-white text-center text-6xl font-bold pb-8 border-b-2">Contacto</h1>
      <div>
        <p className="text-white text-xl text-center">¿Tienes interés o alguna duda/sugerencia sobre los servicios que ofrecemos?</p>
        <p className="text-white text-xl text-center">Por favor, envíanos un mensaje con lo que tengas que expresar. Estaremos encantados de leerte y brindarte una respuesta.</p>
      </div>
      <section className="flex items-center justify-center">
        <div className="flex justify-center items-center bg-white rounded-2xl pl-12">
          <img className="w-64 h-64" src="boy-writing.jpg" alt="Boy writing icon" />
        </div>
        <ContactForm />
        <div className="flex justify-center items-center bg-white rounded-2xl pr-12">
          <img className="w-64 h-64" src="girl-writing.jpg" alt="Girl writing icon" />
        </div>
      </section>
    </main>
  )
}

export default Contact