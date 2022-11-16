import { NavLink } from "react-router-dom"
import linkInfo from "../data/linkInfo"

interface INavBar {
  isMobile: boolean
  onLinkClick: () => void 
}

const NavBar = ({ isMobile, onLinkClick }: INavBar): JSX.Element => {
  const activeStyle = "border-b-2 border-yellow-400"
  
  if (!isMobile) {
    return (<>
    {
      linkInfo.map(({ url, name }, it) =>
        <NavLink 
          key={ it }
          to={ url }
          className={({ isActive }) => isActive ? activeStyle : undefined }
        >
          { name }
        </NavLink>
      )
    }
    </>)
  }

  return (
    <div className="flex flex-col gap-4">
      {
        linkInfo.map(({ url, name, icon }, it) =>
          <div key={ it } className="flex">
            <NavLink 
              key={ it }
              to={ url }
              onClick={ onLinkClick }
              className={({ isActive }) => isActive ? activeStyle : undefined }
            >
              <div className="flex items-center gap-2 py-1">
                { icon }
                <span>{ name }</span>
              </div>
            </NavLink>
          </div>
        )
      }
    </div>
  )
}

export default NavBar