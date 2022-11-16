interface IModal {
  state: boolean
  setState: React.Dispatch<React.SetStateAction<boolean>>
  children: React.ReactNode
}

const Modal = ({ state, setState, children }: IModal): JSX.Element => {
  const handleCloseBtn = () => setState(false)

  if (state) {
    document.body.style.overflow = "hidden"
  }

  if (!state) {
    document.body.style.overflow = ""
  }
  
  return (
    <>
      {
        state && 
        <div className="w-full h-full fixed flex justify-center items-center bg-black/50 z-20">
          <div className="flex flex-col rounded-3xl bg-white w-56 shadow-sm shadow-black px-8 pt-8 gap-6">
            <div className="flex items-center justify-center w-full h-full max-h-full max-w-full grow">
              { children }
            </div>
            <div className="flex h-full justify-center pb-3">
              <button 
                onClick={ handleCloseBtn }
                className="hover:text-red-600 rounded-full hover:bg-gray-200 hover:cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div> 
      }
    </>
  )
}

export default Modal