import React, { useState, ReactNode } from "react"
import Header from "../Header"
import Footer from "../Footer"
import MenuOverlay from "../MenuOverlay"
import "./Layout.css"

interface LayoutProps {
  children: ReactNode
  uri: string
}

export default ({ children, uri }: LayoutProps) => {
  const [displayOverLay, toggleOverLay] = useState(false)

  return (
    <div className="container">
      <MenuOverlay
        displayOverlay={displayOverLay}
        hideOverlay={() => toggleOverLay(false)}
      />
      <Header
        displayOverlay={displayOverLay}
        showOverlay={() => toggleOverLay(true)}
        uri={uri}
      />
      {children}
      <Footer />
    </div>
  )
}
