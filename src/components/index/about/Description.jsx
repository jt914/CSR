import React from "react"
import PropTypes from "prop-types"

function Description({ category, title, description, color, link }) {
  return (
    <div>
      <h2
        className={`${color} font-bold text-sm md:text-base uppercase tracking-widest`}
      >
        {category}
      </h2>
      <a href={link} className="flex items-center text-black">
        <h1 className="font-medium text-2xl md:text-3xl">{title}</h1>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#e5e5e5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="ml-2 feather feather-external-link"
        >
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
          <polyline points="15 3 21 3 21 9"></polyline>
          <line x1="10" y1="14" x2="21" y2="3"></line>
        </svg>
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
