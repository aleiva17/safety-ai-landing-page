import facebookIcon from "../assets/facebook-icon.svg"
import instagramIcon from "../assets/instagram-icon.svg"
import youtubeIcon from "../assets/youtube-icon.svg"
import linkedIn from "../assets/linkedin-icon.svg"
import { useState } from "react"
import Notifier from "../services/Notifier"

const Footer = (): JSX.Element => {
  const [email, setEmail] = useState("");

  const handleChangeEmailInput = (newEmail: string): void => setEmail(newEmail)
  const handleSubscribeBtn = () => {
    if (email.length === 0 || !email.includes("@") || !email.includes(".")) {
      Notifier.wrongEmail()
      return
    }
    Notifier.subscribedToNewsletter()
    setEmail("")
  }

  return (
    <footer className="flex justify-around flex-wrap items-center bg-secondary text-white py-4 gap-4">
      <div>
        <p className="hidden md:flex font-semibold mb-2">Social</p>
        <div className="flex gap-4">
          <a href="https://www.facebook.com/safety-ai" target="_blank">
            <img className="h-8 w-8" src={ facebookIcon } alt="Facebook Icon" />
          </a>
          <a href="https://www.instagram.com/safetyai/" target="_blank">
            <img className="h-8 w-8" src={ instagramIcon } alt="Instagram Icon" />
          </a>
          <a href="https://www.youtube.com/@safetyai" target="_blank">
            <img className="h-8 w-8" src={ youtubeIcon } alt="Youtube Icon" />
          </a>
          <a href="https://www.linkedin.com/company/safetyai" target="_blank">
            <img className="h-8 w-8" src={ linkedIn } alt="LinkedIn Icon" />
          </a>
        </div>
      </div>
      <p className="hidden md:flex font-semibold text-center">2022 Copyright - Safety AI &copy;</p>
      <div>
        <p className="font-semibold text-center md:text-left mb-4">Suscríbete a nuestro newsletter:</p>
        <div className="flex flex-wrap justify-center gap-2">
          <input onChange={ (e) => handleChangeEmailInput(e.target.value) } value={ email } className="bg-tertiary placeholder:text-white rounded-full px-3 py-1 w-60" type="email" autoComplete="off" placeholder="Ingresa tu correo electrónico" />
          <button onClick={ handleSubscribeBtn } className="bg-yellow-500 hover:bg-yellow-400 duration-300 rounded-lg py-1 px-2">Suscribirse</button>
        </div>
      </div>
      <p className="md:hidden font-semibold text-center">2022 Copyright - Safety AI &copy;</p>
    </footer>
  )
}

export default Footer