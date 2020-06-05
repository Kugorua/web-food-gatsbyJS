import React from "react"
import "./header-top-nav.scss"
export default function HeaderTopBar() {
  return (
    <div className="header-top-nav grid-full ">
      <div className="header-top-nav__wrap grid">
        <div className="header-top-nav__left">
          <div className="header-login ">
            <a href={"#"}>Order online</a>
            <a href={"#"}>Login</a>
          </div>
          <ul className="header-social grid-row">
            <li>
              <a href={"#"}>
                <i
                  style={{ fontSize: 18 }}
                  className="fab fa-facebook-square"
                ></i>
              </a>
            </li>
            <li>
              <a href={"#"}>
                <i
                  style={{ fontSize: 18 }}
                  className="fab fa-facebook-square"
                ></i>
              </a>
            </li>
            <li>
              <a href={"#"}>
                <i
                  style={{ fontSize: 18 }}
                  className="fab fa-facebook-square"
                ></i>
              </a>
            </li>
            <li>
              <a href={"#"}>
                <i
                  style={{ fontSize: 18 }}
                  className="fab fa-facebook-square"
                ></i>
              </a>
            </li>
            <li>
              <a href={"#"}>
                <i
                  style={{ fontSize: 18 }}
                  className="fab fa-facebook-square"
                ></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="header-top-nav__right">
          <div className="header-contact">
            <p className="call-us">
              Call Us:{" "}
              <a className="font" href="#">
                +1123 4567
              </a>
              <span className="open-now">
                <i
                  className="fa fa-check-square"
                  style={{
                    color: "#80c200",
                    marginRight: 10,
                    paddingTop: 5,
                    fontSize: 18,
                  }}
                />
                We are open now(9am-10pm)
              </span>
              <span className="close-now" style={{ display: "none" }}>
                <i className="fa fa-square" />
                We are close now(10pm-9am)
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
