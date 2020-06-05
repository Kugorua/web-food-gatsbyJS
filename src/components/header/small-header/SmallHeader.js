import React from "react"
import "./small-header.scss"
export default function SmallHeader() {
  return (
    <div className="small-header grid-full">
      <div className="small-header__wrap grid">
        <p>Home</p>
        <i
          class="fas fa-chevron-right"
          style={{ fontSize: 10, fontWeight: 1000 }}
        ></i>
        <p>Team</p>
      </div>
    </div>
  )
}
