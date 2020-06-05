import React from "react"
import "./main-home.scss"
import Sliders from "./slider/Slider"
import IntroProduct from "./intro-product/IntroProduct"
export default function MainHome() {
  return (
    <div className="main-home">
      <Sliders />
      <IntroProduct />
    </div>
  )
}
