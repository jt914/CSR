import React from "react"
import PropTypes from "prop-types"
function Image({ image }) {
  return (
    <div>
      <img
        alt="cp"
        className="w-full"
        src={`./assets/img/cards/${image}.jpg`}
      />
    </div>
  )
}

Image.propTypes = {
  image: PropTypes.string.isRequired,
}
export default Image
