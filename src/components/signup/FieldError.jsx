import React from "react"

const Error = ({ message }) => {
  return (
    <div>
      <div className="text-red-700 pt-2 text-sm">{message}</div>
    </div>
  )
}

export default Error
