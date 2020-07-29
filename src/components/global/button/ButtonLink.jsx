import React from 'react'
import Link from 'next/link'

function buttonLink({ text, link, color }) {
  return (
    <div>
      <Link href={`/${link}`}>
        <button
          className={`px-5 py-3 text-base cursor-pointer select-none bg-darken duration-100 ease-in text-white rounded-lg ${color}`}
        >
          {text}
        </button>
      </Link>
    </div>
  )
}

export default buttonLink
