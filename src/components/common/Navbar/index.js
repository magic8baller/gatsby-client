import React from "react"
import NavHeader from './NavHeader'
import NavLinks from "constants/navLinks"

const Navbar = ({toggleSidebar}) => (
  <nav className="navbar">
    <div className="nav-center">
      <NavHeader toggleSidebar={toggleSidebar}/>
      <NavLinks styleClass='nav-links'/>
    </div>
  </nav>
)

export default Navbar