import React from 'react'
import { FaTimes } from "react-icons/fa"
import NavLinks from 'constants/navLinks'
import SocialLinks from 'constants/socialLinks'

const Sidebar = ({ toggleSidebar}) => (
    <aside className='sidebar show-sidebar'>
      <button className="close-btn" onClick={toggleSidebar}>
        <FaTimes />
      </button>
      <div className="side-container">
        <NavLinks styleClass="sidebar-links" />
        <SocialLinks styleClass="sidebar-icons" />
      </div>
    </aside>
  )


export default Sidebar
