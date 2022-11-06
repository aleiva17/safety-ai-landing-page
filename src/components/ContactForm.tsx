import { useState } from "react"

const ContactForm = (): JSX.Element => {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleOnChangeNameInput = (newText: string): void => setName(newText)
  const handleOnChangePhoneInput = (newNumber: string): void => setPhone(newNumber)
  const handleOnChangeEmailInput = (newEmail: string): void => setEmail(newEmail)
  const handleOnChangeMessageInput = (newMessage: string): void => setMessage(newMessage)

  return (
    <form className="bg-[#1a202c] flex flex-col px-10 pt-10 rounded-3xl gap-4">
      <div className="flex justify-between gap-4">
        <label className="text-white text-xl" htmlFor="name">Nombre</label>
        <input onChange={ (event) => handleOnChangeNameInput(event.target.value) } className="w-72 rounded-full py-1 px-3" type="text" name="name" value={ name } />
      </div>
      <div className="flex justify-between gap-4">
        <label className="text-white text-xl" htmlFor="phone">Celular</label>
        <input onChange={ (event) => handleOnChangePhoneInput(event.target.value) } className="w-72 rounded-full py-1 px-3" type="number" name="phone" value={ phone } />
      </div>
      <div className="flex justify-between gap-4">
        <label className="text-white text-xl" htmlFor="email">Correo</label>
        <input onChange={ (event) => handleOnChangeEmailInput(event.target.value) } className="w-72 rounded-full py-1 px-3" type="email" name="email" value={ email } />
      </div>
      <div className="flex flex-col justify-between gap-4">
        <label className="text-white text-xl" htmlFor="message">Mensaje</label>
        <textarea onChange={ (event) => handleOnChangeMessageInput(event.target.value) } className="rounded-xl py-2 px-2" name="message" cols={30} rows={4} value={ message }></textarea>
      </div>
      <div className="flex justify-center items-center mb-4">
        <button className="bg-yellow-500 hover:bg-yellow-400 rounded-xl font-semibold px-4 py-2">Enviar</button>
      </div>
    </form>   
  )
}

export default ContactForm