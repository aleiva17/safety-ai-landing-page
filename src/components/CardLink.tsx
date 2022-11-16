import { Link } from "react-router-dom"

interface ICardLink {
  imgSrc: string
  title: string
  redirectName: string
  redirectUrl: string
}

const CardLink = ({ imgSrc, title, redirectName, redirectUrl }: ICardLink): JSX.Element => {
  return (
    <div className="flex flex-col justify-center items-center bg-white rounded-xl min-w-[256px] gap-4 p-4">
      <img className="h-48" src={ imgSrc } alt={`${ title } icon`} />
      <p className="text-2xl max-w-[180px] text-center font-bold">{ title }</p>
      <Link className="bg-yellow-500 hover:bg-yellow-400 duration-300 rounded-lg font-semibold py-2 px-4" to={ redirectUrl }>{ redirectName }</Link>
    </div>
  )
}

export default CardLink