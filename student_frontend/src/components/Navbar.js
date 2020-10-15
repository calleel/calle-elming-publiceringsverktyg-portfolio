import React from "react"
import SocialLinks from "../constants/socialLinks"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"
import { NavBar } from "../elements/NavElements"
const Navbar = ({ toggleSidebar }) => {
  return (
    <NavBar>
      <div id="top" className="nav-center">
        <PageLinks styleClass="nav-links"></PageLinks>
        <SocialLinks className="social-links" />
      </div>
      <div className="nav-header">
        <button type="button" className="toggle-btn" onClick={toggleSidebar}>
          <FaAlignRight></FaAlignRight>
        </button>
      </div>
    </NavBar>
  )
}

export default Navbar
