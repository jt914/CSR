import React from "react"

const Error = ({ message }) => {
  return (
    <div>
      <div className="border border-green-300 bg-green-100 text-green-700 p-3 w-full rounded-lg">
        {message}
      </div>
    </div>
  )
}

export default Error
