import React from "react"

import Header from "../header/Header"
import "../../assets/style/base/rest.scss"
export default function Layout(props) {
  return (
    <div className="app">
      <Header />
      {props.children}
    </div>
  )
}
