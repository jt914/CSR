import React from "react"
import PropTypes from "prop-types"

function Description({ category, title, description, color, link }) {
  return (
    <div>
      <h2 className={`${color} font-bold text-sm md:text-base uppercase`}>
        {category}
      </h2>
      <a href={link}>
        <h1 className="text-black font-medium text-2xl md:text-3xl">{title}</h1>
      </a>
      <p className="text-paragraph leading-relaxed pt-5">{description}</p>
    </div>
  )
}

Description.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}

export default Description
