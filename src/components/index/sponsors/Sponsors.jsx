import React from 'react'

function Sponsors() {
  return (
    <div className="absolute -mt-16 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="h-32 bg-white shadow-lg rounded-xl flex justify-evenly items-center">
          <img
            className="w-32 filter-grayscale transition-all duration-100 ease-in hover:filter-none"
            src="./assets/img/sponsors/amazon.png"
          />
          <img
            className="w-32 filter-grayscale transition-all duration-100 ease-in hover:filter-none"
            src="./assets/img/sponsors/google.png"
          />
          <img
            className="w-32 filter-grayscale transition-all duration-100 ease-in hover:filter-none"
            src="./assets/img/sponsors/microsoft.png"
          />
          <img
            className="w-32 filter-grayscale transition-all duration-100 ease-in hover:filter-none"
            src="./assets/img/sponsors/lockheedmartin.png"
          />
        </div>
      </div>
    </div>
  )
}

export default Sponsors
