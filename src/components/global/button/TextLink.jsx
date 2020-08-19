import React from "react"
import { Link, animateScroll as scroll } from "react-scroll"

function TextLink({ text, link, color }) {
  return (
    <div>
      <Link to={`${link}`} smooth={true} offset={-100} spy={true}>
        <p
          className={`px-5 py-3 cursor-pointer select-none text-base bg-darken duration-100 ease-in ${color}`}
        >
          {text}
        </p>
      </Link>
    </div>
  )
}

export default TextLink
