
interface ICardInfo {
  title: string
  imgSrc: string
  description: string
}

const CardInfo = ({ title, imgSrc, description }: ICardInfo): JSX.Element => {
  return (
    <div className="flex flex-col justify-center items-center bg-white rounded-xl w-64 gap-4 p-8">
      <img className="h-48" src={ imgSrc } alt={`${ title } icon`} />
      <p className="text-2xl max-w-[180px] text-center font-bold">{ title }</p>
      <p className="text-center">{ description }</p>
    </div>
  )
}

export default CardInfo