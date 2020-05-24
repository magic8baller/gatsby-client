import React, {useState} from "react"
import PropTypes from "prop-types"
// import 'styles/main.css'
import Sidebar from './common/Sidebar'
import Navbar from "./common/Navbar"
import Footer from "./common/Footer"
import GlobalStyle from 'styles/global.styles.js'

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
    <GlobalStyle/>
      <Navbar toggleSidebar={toggleSidebar} />
     {isOpen && <Sidebar toggleSidebar={toggleSidebar}/>}
      {children}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
