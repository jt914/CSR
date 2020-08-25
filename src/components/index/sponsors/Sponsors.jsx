import React, { useState, useEffect } from "react"
import ItemsCarousel from "react-items-carousel"

function Sponsors() {
  const [activeItemIndex, setActiveItemIndex] = useState(0)
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     //activeItemIndex: (prevState.activeItemIndex + 1) % (noOfItems-noOfCards + 1),
  //     setActiveItemIndex((activeItemIndex + 1) % 4)
  //   }, 3000)
  //   return () => clearInterval(timer)
  // })
  return (
    <div className="absolute -mt-16 w-full">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center h-32 p-4 w-full bg-white border-2 border-about-bg rounded-xl">
          <picture className="w-32 mx-auto my-auto filter-grayscale transition-all duration-100 ease-in hover:filter-none">
            <source
              alt="W.T. Woodson Logo"
              srcSet={require("../../../../public/assets/img/sponsors/woodson.webp")}
              type="image/webp"
            />
            <source
              alt="W.T. Woodson Logo"
              srcSet={require("../../../../public/assets/img/sponsors/woodson.png")}
              type="image/png"
            />
            <img
              alt="W.T. Woodson Logo"
              src="./assets/img/sponsors/woodson.webp"
            />
          </picture>
        </div>
        {/* <ItemsCarousel
          requestToChangeActive={setActiveItemIndex}
          activeItemIndex={activeItemIndex}
          numberOfCards={3}
          gutter={5}
          infiniteloop={true}
          enablePlaceholder={true}
          infiniteLoop={true}
          disableSwipe={true}
          classes={{
            itemWrapper: "flex items-center",
            itemsWrapper: "flex items-center",
            wrapper:
              "flex items-center h-32 p-4 w-full bg-white border-2 border-about-bg rounded-xl",
          }}
        >
          <img
            className="md:w-32 mx-auto my-auto filter-grayscale transition-all duration-100 ease-in hover:filter-none"
            src="./assets/img/sponsors/woodson.webp"
          />
          <img
            className="md:w-32 mx-auto my-auto filter-grayscale transition-all duration-100 ease-in hover:filter-none"
            src="./assets/img/sponsors/google.webp"
          />
          <img
            className="md:w-32 mx-auto my-auto filter-grayscale transition-all duration-100 ease-in hover:filter-none"
            src="./assets/img/sponsors/microsoft.webp"
          />
          <img
            className="md:w-32 mx-auto my-auto filter-grayscale transition-all duration-100 ease-in hover:filter-none"
            src="./assets/img/sponsors/lockheedmartin.webp"
          />
          <img
            className="md:w-32 mx-auto my-auto filter-grayscale transition-all duration-100 ease-in hover:filter-none"
            src="./assets/img/sponsors/amazon.webp"
          />
          <img
            className="md:w-32 mx-auto my-auto filter-grayscale transition-all duration-100 ease-in hover:filter-none"
            src="./assets/img/sponsors/google.webp"
          />
        </ItemsCarousel> */}
      </div>
    </div>
  )
}

export default Sponsors
