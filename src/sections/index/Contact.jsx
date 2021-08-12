import React from "react"

import Card from "../../components/index/contact/Card"

const Membership = () => {
  return (
    <div>
      <div className="bg-about-bg">
        <div
          id="contact"
          className="max-w-7xl mx-auto px-6 py-12 md:py-24 md:grid md:grid-cols-2"
        >
          <div className="flex items-center p-6 md:p-8 bg-white">
            <Card category="Contact" title="Get in Touch" />
          </div>
          <div
            className="flex-1 bg-cover bg-center relative"
            style={{
              backgroundImage: `url(${require("../../../public/assets/img/contact/woodson.jpg")})`,
            }}
          >
            <img
              className="absolute right-0 top-0 -mr-4 -mt-3 z-0"
              src="./assets/img/shapes/contactwave.svg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Membership
