import React from "react"
import SocialLinks from "../constants/socialLinks"
import { FooterWrapper } from "../elements/FooterElements"

const Footer = () => {
  return (
    <FooterWrapper className="footer">
      <div className="footer-content">
        <SocialLinks styleClass="footer-links"></SocialLinks>
        <h4>
          copyright&copy; {new Date().getFullYear()} | &nbsp;
          <span>Calle Elming</span> | all rights reserved
        </h4>
      </div>
    </FooterWrapper>
  )
}

export default Footer
