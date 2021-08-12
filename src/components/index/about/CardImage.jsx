import React from "react"
import PropTypes from "prop-types"
import Image from "next/image"

function CardImage({ image }) {
  return (
    <div>
      <img
        alt="cp"
        className="w-full"
        src={require(`../../../../public/assets/img/cards/${image}.jpeg?webp`)}
      />
    </div>
  )
}

Image.propTypes = {
  image: PropTypes.string.isRequired,
}
export default CardImage
