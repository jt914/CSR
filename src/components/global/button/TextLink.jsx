import React from 'react'
import Link from 'next/link'

function TextLink({ text, link, color }) {
  return (
    <div>
      <Link href={`/${link}`}>
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
