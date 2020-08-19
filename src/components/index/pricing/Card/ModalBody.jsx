import React from "react"

const ModalBody = () => {
  return (
    <div>
      <p className="text-paragraph text-base">
        If you are interested in making a financial contribution, please write a
        check to{" "}
        <span className="font-medium">
          W.T. Woodson High School with Cyber Security Robotics
        </span>{" "}
        in the memo. Mail the check to:{" "}
        <span className="font-medium">9525 Main St, Fairfax, VA 22031</span>.
        All donations are fully tax-deductible.
      </p>
      <div className="w-full h-4" />
      <p className="text-paragraph text-base">
        For recurring donations, material donations, or any other inquiries,
        please reach out to us at
        <a
          href="mailto:finance@wtw.dev"
          className="ml-1 hover:text-primary ease-in duration-100 transition-colors font-medium"
        >
          finance@wtw.dev
        </a>
        .
      </p>
    </div>
  )
}

export default ModalBody
