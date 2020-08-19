import React from "react"
import ButtonLink from "../../global/button/ButtonLink"

const Card = ({ category, title, description, button }) => {
  return (
    <div className="">
      <h2 className="text-secondary font-bold text-sm md:text-base uppercase">
        {category}
      </h2>
      <h1 className="text-black font-medium text-2xl md:text-4xl">{title}</h1>
      <p className="text-paragraph max-w-3xl mx-auto leading-7 pt-5 pb-10">
        {description}
      </p>
      <ButtonLink text={button} link="/application" color="bg-secondary" />
    </div>
  )
}

export default Card
