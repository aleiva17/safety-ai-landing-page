import { Link } from "react-router-dom"
import NavBar from "../components/NavBar"

interface IHeader {
  showModal: React.Dispatch<React.SetStateAction<boolean>>
}

const Header = ({ showModal }: IHeader): JSX.Element => {
  return (
    <header className="flex items-center justify-between md:justify-around bg-soft-white px-8 md:px-0">
      <Link to="/">
        <img src="/logo.png" alt="Safety AI Logo" className="max-h-24 w-auto" />
      </Link>
      <nav className="hidden md:flex justify-center items-center font-bold gap-4">
        <NavBar onLinkClick={ () => showModal(false) } isMobile={ false } />
      </nav>
      <svg onClick={ () => showModal(true) } xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="md:hidden left-0 w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    </header>
  )
}

export default Header