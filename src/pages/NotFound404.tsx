
const NotFound404 = (): JSX.Element => {
  return (
    <main className="bg-primary text-white flex flex-col justify-center items-center gap-4 px-4 py-8">
      <img className="w-4/5 max-w-xs" src="/error-404.png" alt="Error 404 Icon" />
      <p className="text-3xl font-bold text-center">¡Vaya! Parece que esta página no existe</p>
      <p className="text-center text-xl">Es posible que el enlace que has seguido sea incorrecto o que se haya eliminado la página.</p>
    </main>
  )
}

export default NotFound404