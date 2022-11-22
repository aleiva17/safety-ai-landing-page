import { useState } from "react"
import Notifier from "../services/Notifier"

const ContactForm = (): JSX.Element => {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleOnChangeNameInput = (newText: string): void => setName(newText)
  const handleOnChangePhoneInput = (newNumber: string): void => setPhone(newNumber)
  const handleOnChangeEmailInput = (newEmail: string): void => setEmail(newEmail)
  const handleOnChangeMessageInput = (newMessage: string): void => setMessage(newMessage)

  const handleSubmitBtn = () => {
    if (name.length === 0 || phone.length === 0 || email.length === 0 || message.length === 0) {
      Notifier.missingData()
      return
    }

    if (!email.includes("@") || !email.includes(".")) {
      Notifier.wrongEmail()
      return
    }

    Notifier.messageSent()
    setName("")
    setPhone("")
    setEmail("")
    setMessage("")
  }

  return (
    <form onSubmit={ (e) => e.preventDefault() } className="bg-[#1a202c] flex flex-col max-w-full px-9 md:px-10 pt-10 rounded-3xl gap-4">
      <div className="flex flex-wrap md:flex-nowrap justify-between gap-4">
        <label className="text-white text-xl" htmlFor="nForm">Nombre</label>
        <input autoComplete="off" onChange={ (event) => handleOnChangeNameInput(event.target.value) } className="w-full md:w-72 max-w-72 rounded-full py-1 px-3" type="text" name="nForm" value={ name } />
      </div>
      <div className="flex flex-wrap md:flex-nowrap justify-between gap-4">
        <label className="text-white text-xl" htmlFor="pForm">Celular</label>
        <input autoComplete="off" onChange={ (event) => handleOnChangePhoneInput(event.target.value) } className="w-full md:w-72 max-w-72 rounded-full py-1 px-3" type="number" name="pForm" value={ phone } />
      </div>
      <div className="flex flex-wrap md:flex-nowrap justify-between gap-4">
        <label className="text-white text-xl" htmlFor="mForm">Correo</label>
        <input autoComplete="off" onChange={ (event) => handleOnChangeEmailInput(event.target.value) } className="w-full md:w-72 max-w-72 rounded-full py-1 px-3" type="email" name="mForm" value={ email } />
      </div>
      <div className="flex flex-wrap md:flex-nowrap flex-col justify-between gap-4">
        <label className="text-white text-xl" htmlFor="message">Mensaje</label>
        <textarea autoComplete="off" onChange={ (event) => handleOnChangeMessageInput(event.target.value) } className="rounded-xl py-2 px-2 w-full" name="message" rows={4} value={ message }></textarea>
      </div>
      <div className="flex justify-center items-center mb-4">
        <button 
          onClick={ handleSubmitBtn }
          className="bg-yellow-500 hover:bg-yellow-400 rounded-xl font-semibold px-4 py-2"
        >
          Enviar
        </button>
      </div>
    </form>   
  )
}

export default ContactForm