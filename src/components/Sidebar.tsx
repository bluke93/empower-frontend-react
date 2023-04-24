import '../assets/scss/components/Sidebar.scss'
import { Link } from "react-router-dom";

const SidebarLinks = [
  { path: '/', name: "dashboard", icon: 'cellular' },
  { path: '/course', name: "course", icon: 'school-outline' },
  { path: '/activities', name: "activities", icon: 'journal-outline' },
  { path: '/results', name: "results", icon: 'bookmarks-outline' },
  { path: '/calendar', name: "calendar", icon: 'calendar-outline' },
  { path: '/resources', name: "resources", icon: 'library-outline' },
  { path: '/forum', name: "forum", icon: 'chatbubbles-outline' },
]

function Sidebar() {
  return (
    <>
      <nav className='sidebar'>
        {SidebarLinks.map((link, index) => {
          return <Link to={link.path} className='link' key={index}>{link.name}</Link>
        })}
      </nav>
    </>
  )
}

export default Sidebar
