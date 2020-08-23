import Head from "next/head"
import Link from "next/link"
import React, { useState, useEffect } from "react"

import Subscribe from "../../components/signup/Subscribe"

export default function Join() {
  const divPath = { backgroundImage: `url('./assets/img/join/img.jpg')` }
  return (
    <div className="flex min-h-screen">
      <Head>
        <title>W.T. Woodson Cybersecurity and Robotics</title>
        <meta name="title" content="W.T. Woodson Cybersecurity and Robotics" />
        <meta
          name="description"
          content="Our Cybersecurity and Robotics program provide students with unique STEM opportunities and experience to educate and help students explore the different fields of STEM through competitions and other activities."
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#603cba" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
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
