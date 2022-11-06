import Header from "./layout/Header"
import Home from "./pages/Home"
import Us from "./pages/Us"
import Contact from "./pages/Contact"
import Services from "./pages/Services"
import SafetyCarValidatorService from "./pages/SafetyCarValidatorService"
import Footer from "./layout/Footer"
import { Routes, Route } from "react-router-dom"
import NotFound404 from "./pages/NotFound404"

const App = (): JSX.Element => {
  return (
    <div className="min-h-screen grid grid-cols-1 grid-rows-[auto_1fr_auto]">
      <Header />
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
      <Footer />
    </div>
  )
}

export default App