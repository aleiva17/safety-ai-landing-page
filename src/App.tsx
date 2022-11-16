import Header from "./layout/Header"
import Main from "./layout/Main"
import Footer from "./layout/Footer"

import Modal from "./components/Modal"
import NavBar from "./components/NavBar"
import { useState } from "react"

import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";

const App = (): JSX.Element => {
  const [showModal, setShowModal] = useState(false) 

  return (
    <>
      <ToastContainer />
      <div className="min-h-screen grid grid-cols-1 grid-rows-[auto_1fr_auto]">
        <Header showModal= { setShowModal } />
        <Modal state={ showModal } setState={ setShowModal }>
          <NavBar onLinkClick={ () => setShowModal(false) } isMobile={ true } />
        </Modal>
        <Main />
        <Footer />
      </div>
    </>
  )
}

export default App