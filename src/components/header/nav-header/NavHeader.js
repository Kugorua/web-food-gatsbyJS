import React from "react"
import "./nav-header.scss"
export default function NavHeader() {
  return (
    <div className="nav-header grid-full">
      <div className="nav-header__wrap grid">
        <div className="nav-header__logo">
          <img src="http://new.uouapps.com/takeaway/img/header-logo.png" />
        </div>
        <ul className="nav-header__list">
          <li>
            Home{" "}
            <i
              class="fas fa-caret-down"
              style={{ marginLeft: 5, fontSize: 13 }}
            ></i>
          </li>
          <li>
            {" "}
            Menu Card
            <i
              class="fas fa-caret-down"
              style={{ marginLeft: 5, fontSize: 13 }}
            ></i>
          </li>
          <li>Chef </li>
          <li>Team </li>
          <li>
            Blog{" "}
            <i
              class="fas fa-caret-down"
              style={{ marginLeft: 5, fontSize: 13 }}
            ></i>
          </li>
          <li>
            New & Events{" "}
            <i
              class="fas fa-caret-down"
              style={{ marginLeft: 5, fontSize: 13 }}
            ></i>
          </li>
          <li> Contact us </li>
        </ul>
      </div>
    </div>
  )
}
