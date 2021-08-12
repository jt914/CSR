import React from "react"

const Card = ({ price, features }) => {
  return (
    <div className="">
      <div className="p-6 rounded-md text-left">
        <div className="flex items-baseline">
          <p className="self-start text-lg text-pricing-subtext pr-1">$</p>
          <p className="text-white font-medium text-3xl md:text-4xl pr-2">
            {price}
          </p>
          <p className="text-pricing-subtext text-lg">minimum</p>
        </div>
        <div className="pt-4 pb-12">
          <ul>
            {features.map((feature) => (
              <li className="flex items-start pb-2" key={feature}>
                <img
                  src="./assets/img/pricing/checkmark.svg"
                  className="mr-4 mt-1"
                  height="20"
                  width="20"
                />
                <span className="text-pricing-description text-lg">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Card
