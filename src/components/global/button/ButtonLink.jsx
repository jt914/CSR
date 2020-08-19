import React from "react"
import Link from "next/link"
import { Link as Anchor, animateScroll as scroll } from "react-scroll"

function buttonLink({ text, link, color, type }) {
  return (
    <div>
      {type === "link" ? (
        <Link href={`/${link}`}>
          <button
            className={`px-5 py-3 text-base cursor-pointer select-none bg-darken duration-100 ease-in text-white rounded-lg ${color}`}
          >
            {text}
          </button>
        </Link>
      ) : (
        <Anchor
          to={`${link.toLowerCase()}`}
          smooth={true}
          offset={-100}
          spy={true}
        >
          <button
            className={`px-5 py-3 text-base cursor-pointer select-none bg-darken duration-100 ease-in text-white rounded-lg ${color}`}
          >
            {text}
          </button>
        </Anchor>
      )}
    </div>
  )
}

export default buttonLink
