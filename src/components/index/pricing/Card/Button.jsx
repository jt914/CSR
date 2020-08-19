import React from "react"

const Button = ({ price, onclick }) => {
  return (
    <div>
      <button
        onClick={onclick}
        className="w-full p-3 text-center bg-pricing-light-btn text-pricing-light-text hover:bg-pricing-btn hover:text-white transition-colors ease-in duration-100 font-medium rounded-md self-end"
      >
        Donate ${price}+
      </button>
    </div>
  )
}

export default Button
