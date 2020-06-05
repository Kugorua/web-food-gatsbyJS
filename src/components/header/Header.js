import React from "react"

import HeaderTopBar from "./header-top-bar/HeaderTopBar"
import NavHeader from "./nav-header/NavHeader"
import SmallHeader from "./small-header/SmallHeader"
import "./header.scss"

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <HeaderTopBar />
        <NavHeader />
        <SmallHeader />
      </div>
    </header>
  )
}
