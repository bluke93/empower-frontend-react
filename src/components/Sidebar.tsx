import '../assets/scss/components/Sidebar.scss'
import { NavLink } from "react-router-dom";

const menuTop = [
  { path: "/", text: "dashboard", icon: 'cellular' },
  { path: "/courses", text: "courses", icon: 'school-outline' },
  { path: "/activities", text: "activities", icon: 'journal-outline' },
  { path: "/results", text: "results", icon: 'bookmarks-outline'},
  { path: "/calendar", text: "calendar", icon: 'calendar-outline'},
  { path: "/resources", text: "resources", icon: 'library-outline'},
  { path: "/forum", text: "forum", icon: 'chatbubbles-outline' }
]

const menuBottom = [
  { path: "/support", text: "Support", icon: "help-buoy-outline" },
  { path: "/settings", text: "Settings", icon: "cog-outline" },
  { path: "/logout", text: "Logout", icon: "exit-outline" },
]

function Sidebar() {
  return (
    <>
      <nav className='sidebar'>
        <div className='logo'>
          EMPOWER
        </div>
        <div className='menu top'>
          {renderMenu(menuTop)}
        </div>
        <div className='menu bottom'>
          {renderMenu(menuBottom)}
        </div>
      </nav>
    </>
  )
}

function renderMenu(menu: Array<INavLink>){
  return menu.map((link: INavLink, index: number) => {
    return (
      <>
      
        <NavLink to={link.path} className='link' key={index}>
          <ion-icon class="icon" icon={link.icon} key={index}/>{link.text}
        </NavLink>
      </>
    )
  })
}

export default Sidebar
