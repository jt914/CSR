import React, { useRef, useState } from "react"
import fetch from "isomorphic-unfetch"
import { useForm } from "react-hook-form"

const Subscribe = () => {
  const emailEl = useRef(null)
  const fnameEl = useRef(null)
  const lnameEl = useRef(null)
  const phoneEl = useRef(null)
  const memberEl = useRef(null)
  const tshirtEl = useRef(null)
  const [message, setMessage] = useState("")

  const { register, handleSubmit, watch, errors } = useForm()

  const subscribe = async (e) => {
    //e.preventDefault()

    const data = {
      email: emailEl.current.value,
      firstname: fnameEl.current.value,
      lastname: lnameEl.current.value,
      number: phoneEl.current.value,
      status: memberEl.current.value,
      size: tshirtEl.current.value,
    }

    const res = await fetch("/api/subscribe", {
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })

    console.log(JSON.stringify(data))

    const { error } = await res.json()

    if (error) {
      setMessage(error)

      return
    }

    //emailEl.current.value = ""
    setMessage("Success! You are now registered for the club.")
  }

  return (
    <form onSubmit={handleSubmit(subscribe)}>
      <label htmlFor="email-input">{"Email Address"}</label>
      <input
        id="email-input"
        name="email"
        placeholder="you@awesome.com"
        ref={[emailEl, register({ required: true })]}
        type="email"
        className="block"
      />
      {errors.email && <span>This field is required</span>}
      <label htmlFor="fname-input">{"First Name"}</label>
      <input
        id="fname-input"
        name="fname"
        placeholder="john"
        ref={[fnameEl, register({ required: true })]}
        type="text"
        className="block"
      />
      {errors.fname && <span>This field is required</span>}
      <label htmlFor="lname-input">{"Last Name"}</label>
      <input
        id="lname-input"
        name="lname"
        placeholder="doe"
        ref={[lnameEl, register({ required: true })]}
        type="text"
        className="block"
      />
      {errors.lname && <span>This field is required</span>}
      <label htmlFor="phone-input">{"Phone"}</label>
      <input
        id="phone-input"
        name="phone"
        placeholder="123-456-7890"
        ref={[phoneEl, register({ required: true })]}
        type="text"
        className="block"
      />
      {errors.phone && <span>This field is required</span>}
      <label htmlFor="member-input">{"Recurring"}</label>
      <input
        id="member-input"
        name="member"
        placeholder="Yes/No"
        ref={[memberEl, register({ required: true })]}
        type="member"
        className="block"
      />
      {errors.member && <span>This field is required</span>}
      <label htmlFor="tshirt-input">{"T Shirt Size"}</label>
      <input
        id="tshirt-input"
        name="tshirt"
        placeholder="Small"
        ref={[tshirtEl, register({ required: true })]}
        type="tshirt"
        className="block"
      />
      {errors.tshirt && <span>This field is required</span>}
      <div className="pt-20">
        {message
          ? message
          : `I'll only send emails when new content is posted. No spam.`}
      </div>
      <button type="submit">{"✨ Subscribe 💌"}</button>
    </form>
  )
}

export default Subscribe
