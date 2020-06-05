import React from "react"
import Slider from "react-slick"
import "./slider.scss"
function SampleNextArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, borderRadius: "50%", right: 30 }}
      onClick={onClick}
    />
  )
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        left: 50,
        zIndex: 1,
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  )
}
export default function Sliders() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 10000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    customPaging: () => (
      <div
        style={{
          boxSizing: "border-box",
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          color: "blue",
          border: "3px black solid",
          marginTop: "-50px",
        }}
      ></div>
    ),
  }
  return (
    <div className="slider">
      <Slider {...settings}>
        <div className="slider-item ">
          <img src="http://new.uouapps.com/takeaway/img/content/home-slide-1.jpg" />
          <div className="slider-solgan">
            <h2>
              <span>Hungry?!</span>
              <br />
              Good, we are here <br /> to
              <span>sever</span>
              you
            </h2>
            <a href="#" className="btn btn-default">
              <i class="far fa-file-alt" style={{ marginRight: 10 }}></i>
              Read More
            </a>
          </div>
        </div>
        <div className="slider-item ">
          <img src="http://new.uouapps.com/takeaway/img/content/home-slide-1.jpg" />
          <div className="slider-solgan">
            <h2>
              <span>Hungry?!</span>
              <br />
              Good, we are here <br /> to
              <span>sever</span>
              you
            </h2>
            <a href="#" className="btn btn-default">
              <i class="far fa-file-alt" style={{ marginRight: 10 }}></i>
              Read More
            </a>
          </div>
        </div>
        <div className="slider-item ">
          <img src="http://new.uouapps.com/takeaway/img/content/home-slide-1.jpg" />
          <div className="slider-solgan">
            <h2>
              <span>Hungry?!</span>
              <br />
              Good, we are here <br /> to
              <span>sever</span>
              you
            </h2>
            <a href="#" className="btn btn-default">
              <i class="far fa-file-alt" style={{ marginRight: 10 }}></i>
              Read More
            </a>
          </div>
        </div>
      </Slider>
    </div>
  )
}
