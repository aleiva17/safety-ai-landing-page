import { Link, NavLink } from "react-router-dom"

const Header = (): JSX.Element => {
  const activeStyle = "border-b-2 border-yellow-400"

  return (
    <header className="flex justify-around bg-soft-white">
      <Link to="/">
        <img src="/logo.png" alt="Safety AI Logo" className="h-24" />
      </Link>
      <nav className="flex justify-center items-center font-bold gap-4">
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? activeStyle : undefined }
        >
          Inicio
        </NavLink>
        <NavLink 
          to="/nosotros" 
          className={({ isActive }) => isActive ? activeStyle : undefined }
        >
          Nosotros
        </NavLink>
        <NavLink 
          to="/servicios"
          className={({ isActive }) => isActive ? activeStyle : undefined }
        >
          Servicios
        </NavLink>
        <NavLink 
          to="/contacto"
          className={({ isActive }) => isActive ? activeStyle : undefined }
        >
          Contacto
        </NavLink>
      </nav>
    </header>
  )
}

export default Header