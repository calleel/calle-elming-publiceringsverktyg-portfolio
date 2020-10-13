import React from "react"
import SocialLinks from "../constants/socialLinks"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"
const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      <div id="top" className="nav-center">
        <PageLinks styleClass="nav-links"></PageLinks>
        <SocialLinks />
      </div>
      <div className="nav-header">
        <button type="button" className="toggle-btn" onClick={toggleSidebar}>
          <FaAlignRight></FaAlignRight>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
