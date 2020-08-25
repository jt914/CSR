import React from "react"
import PropTypes from "prop-types"
function Image({ image }) {
  return (
    <div>
      <img
        alt="cp"
        className="w-full"
        src={require(`../../../../public/assets/img/cards/${image}.jpg?webp`)}
      />
    </div>
  )
}

Image.propTypes = {
  image: PropTypes.string.isRequired,
}
export default Image
