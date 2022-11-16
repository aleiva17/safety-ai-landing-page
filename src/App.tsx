import Header from "./layout/Header"
import Main from "./layout/Main"
import Footer from "./layout/Footer"

import Modal from "./components/Modal"
import NavBar from "./components/NavBar"
import { useState } from "react"

const App = (): JSX.Element => {
  const [showModal, setShowModal] = useState(false) 

  return (
    <div className="min-h-screen grid grid-cols-1 grid-rows-[auto_1fr_auto]">
      <Header showModal= { setShowModal } />
      <Modal state={ showModal } setState={ setShowModal }>
        <NavBar onLinkClick={ () => setShowModal(false) } isMobile={ true } />
      </Modal>
      <Main />
      <Footer />
    </div>
  )
}

export default App