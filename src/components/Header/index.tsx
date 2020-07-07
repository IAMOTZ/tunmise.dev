import React from "react"
import Link from "gatsby-link"
import classnames from "classnames"
import "./styles.css"
import fakeLogo from "../../images/logo/fake-logo.svg"
import userImage from "../../images/tunmise.png"
import hambugger from "../../images/Hamburgger.svg"

interface HeaderProps {
  showOverlay: () => void
  displayOverlay: boolean
  uri: string
}

export default ({ showOverlay, displayOverlay, uri }: HeaderProps) => {
  const isHomePage = uri === "/"
  return (
    <div className="header">
      <div className="header-padding content-wrap">
        <div className="logo">
          <Link to="/">
            {isHomePage && (
              <img src={fakeLogo} alt="fake-logo" className="fake-logo" />
            )}
            {!isHomePage && (
              <img src={userImage} alt="tunmise-image" className="user-image" />
            )}
          </Link>
        </div>
        {!displayOverlay && (
          <div className="menu">
            <img
              onClick={showOverlay}
              src={hambugger}
              alt=""
              className="menu-hambugger"
            />
            <div className="menu-options menu-list">
              <Link
                to="/tools"
                className="menu-option"
                activeClassName="active"
              >
                Tools
              </Link>
              <Link
                to="#contact-section"
                className="menu-option"
                activeClassName="active"
              >
                Contact
              </Link>
              <a
                href="https://docs.google.com/document/d/1owXzjawd2uBz07Q3_DVAtoIRla7v0Hp3xWESBO49C5c/edit?usp=sharing"
                target="blank"
                className="menu-option"
              >
                Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
