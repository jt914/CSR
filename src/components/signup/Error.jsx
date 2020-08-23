import React from "react"

const Error = ({ message }) => {
  return (
    <div>
      <p className="text-sm mt-1 border-red-600 text-red-600">{message}</p>
    </div>
  )
}

export default Error
