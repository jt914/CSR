import Head from "next/head"
import Link from "next/link"
import React, { useState, useEffect } from "react"

import Subscribe from "../../components/signup/Subscribe"

export default function Join() {
  const divPath = { backgroundImage: `url('./assets/img/join/img.jpg')` }
  return (
    <div className="flex min-h-screen">
      <div className="w-full lg:w-3/5 xl:w-2/5 bg-white max-w-5xl mx-auto px-6 md:px-20 my-10 relative">
        {/* <Subscribe /> */}
        <Link href="/">
          <img src="./assets/img/logo.png" className="w-16 cursor-pointer" />
        </Link>
        <div className="py-6 md:py-10">
          <h1 className="font-medium text-3xl text-black">Become a Member</h1>
          <p className="text-paragraph text-base">
            Register to become a member of the W.T. Woodson Cybersecurity and
            Robotics club.
          </p>
        </div>
        <Subscribe />
        <img
          src="./assets/img/shapes/memberzigzag.svg"
          className="hidden md:block absolute bottom-0"
        />
      </div>
      <div
        className="hidden lg:block lg:w-2/5 xl:w-3/5 bg-cover bg-center"
        style={divPath}
      />
    </div>
  )
}
