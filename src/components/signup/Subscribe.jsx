import React, { useRef, useState, useEffect } from "react"
import fetch from "isomorphic-unfetch"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers"
import * as yup from "yup"
import { motion, AnimatePresence } from "framer-motion"
import md5 from "md5"

import Error from "./Error"
import Success from "./Success"
import FieldError from "./FieldError"

const Subscribe = () => {
  const phoneRegEx = /^\(\d{3}\)\s\d{3}-\d{4}/
  const schema = yup.object().shape({
    fname: yup
      .string()
      .min(1, "Name is not valid.")
      .required("Please enter your last name."),
    lname: yup
      .string()
      .min(1, "Name is not valid.")
      .required("Please enter your email."),
    email: yup
      .string()
      .email("Email address is not valid")
      .required("Please enter your email."),
    phone: yup
      .string()
      .matches(phoneRegEx, "Phone number is not valid")
      .required("Please enter your phone number."),
    member: yup.string().required("Please select an option."),
  })

  const { register, handleSubmit, errors, getValues, setValue } = useForm({
    mode: ["onChange", "onBlur"],
    resolver: yupResolver(schema),
  })

  const sizes = ["Extra-Small", "Small", "Medium", "Large", "Extra-Large"]

  const dropdown = useRef()

  const [error, showError] = useState(false)
  const [success, showSuccess] = useState(false)
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState("")
  const [size, setSize] = useState(sizes[0])
  const [email, setEmail] = useState("")
  const [isOpen, toggleDropdown] = useState(false)
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdown.current && !dropdown.current.contains(event.target)) {
        toggleDropdown(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [dropdown])

  //const emailVal = getValues("email")
  const fnameVal = getValues("fname")
  const lnameVal = getValues("lname")
  const phoneVal = getValues("phone")
  const memberVal = getValues("member")
  const tshirtVal = size

  const subscribe = async (e) => {
    //e.preventDefault()

    const data = {
      email: email,
      firstname: fnameVal,
      lastname: lnameVal,
      number: phoneVal,
      status: memberVal,
      size: tshirtVal,
    }

    const emailHash = {
      email: md5(email),
    }

    const validate = await fetch("/api/valid", {
      body: JSON.stringify(emailHash),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })

    const { valid } = await validate.json()
    if (!valid) {
      setMessage(
        "Email is currently registered. Please try again with a different email."
      )
      showError(true)
      showSuccess(false)
      return
    }

    const res = await fetch("/api/subscribe", {
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })

    const { error } = await res.json()

    if (error) {
      setMessage(error)
      showError(true)
      showSuccess(false)
      return
    }

    setMessage(
      "Success! You are now registered for the W.T. Woodson Cybersecurity and Robotics club."
    )
    showSuccess(true)
    showError(false)
  }

  return (
    <div>
      {message ? (
        error ? (
          <Error message={message} />
        ) : (
          <Success message={message} />
        )
      ) : (
        ""
      )}
      <form
        onSubmit={handleSubmit(subscribe)}
        className="w-full grid grid-cols-2 gap-6 pt-4"
      >
        <div>
          <label htmlFor="fname-input">{"First Name"}</label>
          <input
            id="fname-input"
            name="fname"
            placeholder="John"
            ref={register}
            type="text"
            className="block w-full p-3 rounded-lg border border-gray-300 mt-3"
          />
          {errors.fname && <FieldError message={errors.fname.message} />}
        </div>
        <div>
          <label htmlFor="lname-input">{"Last Name"}</label>
          <input
            id="lname-input"
            name="lname"
            placeholder="Doe"
            ref={register}
            type="text"
            className="block w-full p-3 rounded-lg border border-gray-300 mt-3"
          />
          {errors.lname && <FieldError message={errors.lname.message} />}
        </div>
        <div className="col-span-2">
          <label htmlFor="email-input">{"Email Address"}</label>
          <input
            id="email-input"
            name="email"
            placeholder="johndoe@email.com"
            ref={register}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            className="block w-full p-3 rounded-lg border border-gray-300 mt-3"
          />
          {errors.email && <FieldError message={errors.email.message} />}
        </div>
        <div className="col-span-2 md:col-span-1">
          <label htmlFor="phone-input">{"Phone Number"}</label>
          <input
            id="phone-input"
            name="phone"
            placeholder="(123) 456-7890"
            ref={register}
            type="text"
            className="block w-full p-3 rounded-lg border border-gray-300 mt-3"
          />
          {errors.phone && <FieldError message={errors.phone.message} />}
        </div>
        <div className="col-span-2 md:col-span-1">
          <label htmlFor="tshirt-input">{"T-Shirt Size"}</label>
          <div className="relative select-none">
            <div
              id="tshirt-input"
              name="tshirt"
              onClick={() => toggleDropdown(!isOpen)}
              value={getValues("tshirt")}
              className="w-full p-3 rounded-lg border border-gray-300 flex mt-3 items-center justify-between"
            >
              {size}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-chevron-down"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeIn", duration: 0.1 }}
                className="origin-top absolute bg-white border border-gray-300 shadow-md w-full mt-2 rounded-lg p-1"
                ref={dropdown}
              >
                {sizes.map((size) => {
                  return (
                    <div
                      name="tshirt"
                      value="Medium"
                      ref={register}
                      key={size}
                      onClick={() => {
                        setValue("tshirt", size)
                        setSize(size)
                        toggleDropdown(false)
                      }}
                      className="p-2 hover:bg-gray-100 rounded-lg w-full text-left"
                    >
                      {size}
                    </div>
                  )
                })}
              </motion.div>
            )}
          </div>
          {errors.tshirt && <FieldError message={errors.tshirt.message} />}
        </div>
        <div>
          <p id="radioGroup" className="pb-3">
            New member?
          </p>
          <div className="grid grid-cols-2">
            <input
              id="yes-input"
              name="member"
              type="radio"
              onChange={() => {
                setStatus("Yes")
              }}
              value="Yes"
              ref={register}
              className="absolute invisible"
            />
            <label
              htmlFor="yes-input"
              className="flex items-center cursor-pointer"
            >
              <AnimatePresence>
                <div
                  className={
                    status === "Yes"
                      ? "w-4 h-4 bg-white border-2 border-primary rounded-full ease-in transition-colors duration-100 flex items-center justify-center"
                      : "w-4 h-4 bg-white border-2 border-gray-300 rounded-full ease-in transition-colors duration-100 flex items-center justify-center"
                  }
                >
                  {status === "Yes" && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ ease: "easeIn", duration: "0.1" }}
                      exit={{ opacity: 0, scale: 0 }}
                      className="w-2 h-2 bg-primary rounded-full"
                    />
                  )}
                </div>
              </AnimatePresence>
              <span className="pl-2">Yes</span>
            </label>
            <input
              id="no-input"
              name="member"
              type="radio"
              onChange={() => {
                setStatus("No")
              }}
              value="No"
              ref={register}
              className="absolute invisible"
            />
            <label
              htmlFor="no-input"
              className="flex items-center cursor-pointer"
            >
              <AnimatePresence>
                <div
                  className={
                    status === "No"
                      ? "w-4 h-4 bg-white border-2 border-primary rounded-full ease-in transition-colors duration-100 flex items-center justify-center"
                      : "w-4 h-4 bg-white border-2 border-gray-300 rounded-full ease-in transition-colors duration-100 flex items-center justify-center"
                  }
                >
                  {status === "No" && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ ease: "easeIn", duration: "0.1" }}
                      exit={{ opacity: 0, scale: 0 }}
                      className="w-2 h-2 bg-primary rounded-full"
                    />
                  )}
                </div>
              </AnimatePresence>
              <span className="pl-2">No</span>
            </label>
          </div>
          {errors.member && <FieldError message={errors.member.message} />}
        </div>
        <button
          type="submit"
          className="col-span-2 p-3 bg-primary bg-darken transitio-colors ease-in duration-100 text-white rounded-lg"
        >
          {"Submit Registration"}
        </button>
      </form>
    </div>
  )
}

export default Subscribe
