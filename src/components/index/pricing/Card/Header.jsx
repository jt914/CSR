import React from "react"

const Header = ({ tier }) => {
  return (
    <div>
      <div className="flex items-center py-8">
        <img
          className="p-2 bg-pricing-card-bg rounded-md"
          src={`./assets/img/pricing/${tier}.svg`}
          height="45"
          width="45"
        />
        <h1 className="text-3xl text-white font-medium pl-4">{tier}</h1>
      </div>
    </div>
  )
}

export default Header
