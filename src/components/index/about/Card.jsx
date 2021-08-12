import React from "react"
import PropTypes from "prop-types"
import Description from "../about/Description"
// import Image from "../about/Image"

function Card(props) {
  const { direction, category, title, description, color, link, image } = props

  const divPath = {
    backgroundImage: `url('./assets/img/cards/${image}.jpg')`,
  }
  return (
    <div>
      {direction === "forward" ? (
        <div className="max-w-7xl bg-white mx-auto md:grid md:grid-cols-2">
          <div
            className="h-64 md:hidden bg-cover bg-center"
            style={divPath}
          ></div>
          <div className="bg-white flex items-center px-6 md:px-10 py-16">
            <Description
              category={category}
              title={title}
              description={description}
              color={color}
              link={link}
            />
          </div>
          <div
            className="hidden md:block bg-cover bg-center relative"
            style={divPath}
          >
            <img
              alt=""
              className="absolute right-0 bottom-0 -mr-2 -mb-12"
              src="./assets/img/shapes/aboutzigzag.svg"
            />
          </div>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto bg-white md:grid md:grid-cols-2">
          <div
            className="h-64 md:hidden bg-cover bg-center"
            style={divPath}
          ></div>
          <div
            className="hidden md:block bg-cover bg-center relative"
            style={divPath}
          >
            <img
              alt=""
              className="absolute left-0 bottom-0 -ml-10 -mb-4"
              src="./assets/img/shapes/aboutwavey.svg"
            />
          </div>
          <div className="bg-white flex items-center px-6 md:px-10 py-16">
            <Description
              category={category}
              title={title}
              description={description}
              color={color}
              link={link}
            />
          </div>
        </div>
      )}
    </div>
  )
}

Card.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

export default Card
