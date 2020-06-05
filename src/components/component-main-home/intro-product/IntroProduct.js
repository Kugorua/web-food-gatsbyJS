import React from "react"
import "./intro-product.scss"
export default function IntroProduct() {
  return (
    <div className="intro-product grid-full">
      <div className="intro-product__wrap grid">
        <div className="purchase-product">
          <div className="icon-img">
            {" "}
            <img src="http://new.uouapps.com/takeaway/img/content/call-to-action-icon1.png" />
          </div>

          <div className="purchase-product__content">
            <h4>Purchase TakeAway</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Proin
              nibh augue, suscipit a, scelerisque sed, lacinia in, mi..
            </p>
          </div>
          <div className="btn-group">
            <a href={"#"}>Read More</a>
            <a href={"#"}>Purchase Now</a>
          </div>
        </div>
        <div className="category-boxes"></div>
      </div>
    </div>
  )
}
