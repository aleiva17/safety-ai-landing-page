import Home from "../pages/Home"
import Us from "../pages/Us"
import Contact from "../pages/Contact"
import Services from "../pages/Services"
import SafetyCarValidatorService from "../pages/SafetyCarValidatorService"
import { Routes, Route } from "react-router-dom"
import NotFound404 from "../pages/NotFound404"

const Main = (): JSX.Element => {
  return (
    <Routes>
      <Route 
        path="/"
        element={ <Home /> }
      />
      <Route 
        path="/nosotros"
        element={ <Us /> }
      />
      <Route 
        path="/contacto"
        element={ <Contact /> }
      />
      <Route
        path="/servicios"
        element={ <Services /> }
      />
      <Route
        path="/servicios/safety-car-validator"
        element={ <SafetyCarValidatorService /> }
      />
      <Route
        path="/*"
        element={ <NotFound404 /> }
      />
    </Routes>
  )
}

export default Main