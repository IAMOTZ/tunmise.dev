import React from "react"
import Link from "gatsby-link"
import "./styles.css"
import cross from "../../images/cross.svg"

interface MenuOverlayProps {
  displayOverlay: boolean
  hideOverlay: () => void
}

export default ({ displayOverlay, hideOverlay }: MenuOverlayProps) =>
  displayOverlay && (
    <div className="menu-overlay">
      <div className="close-overlay-icon">
        <img src={cross} alt="" onClick={hideOverlay} />
      </div>
      <div className="menu-options">
        <Link to="/tools" onClick={hideOverlay} className="menu-option">
          Tools
        </Link>
        <Link
          to="#contact-section"
          onClick={hideOverlay}
          className="menu-option"
        >
          Contact
        </Link>
        <a
          href="https://docs.google.com/document/d/1owXzjawd2uBz07Q3_DVAtoIRla7v0Hp3xWESBO49C5c/edit?usp=sharing"
          target="blank"
          onClick={hideOverlay}
          className="menu-option"
        >
          Resume
        </a>
      </div>
    </div>
  )
