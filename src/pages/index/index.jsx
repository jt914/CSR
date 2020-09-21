import Head from "next/head"
import React, { useState, useEffect } from "react"
import { animateScroll as scroll } from "react-scroll"

import Navbar from "../../components/global/navbar/Navbar"
import Landing from "../../sections/index/Landing"
import About from "../../sections/index/About"
import Pricing from "../../sections/index/Pricing"
import Membership from "../../sections/index/Membership"
import Contact from "../../sections/index/Contact"
import Footer from "../../components/global/footer/Footer"
import { motion, AnimatePresence } from "framer-motion"

export default function Home() {
  const scrollToTop = () => {
    scroll.scrollToTop()
  }

  const [scrolled, setScroll] = useState(null)
  useEffect(() => {
    const onScroll = () => {
      const isScrolled = window.scrollY > window.innerHeight
      if (isScrolled !== scrolled) {
        setScroll(isScrolled)
      }
    }
    document.addEventListener("scroll", onScroll)

    return () => {
      document.removeEventListener("scroll", onScroll)
    }
  }, [scrolled])

  return (
    <div className="overflow-x-hidden">
      <Head>
        <title>W.T. Woodson Cybersecurity and Robotics</title>
        <meta
          name="og:title"
          content="W.T. Woodson Cybersecurity and Robotics"
        />
        <meta
          name="og:description"
          content="Our Cybersecurity and Robotics program provide students with unique STEM opportunities and experience to educate and help students explore the different fields of STEM through competitions and other activities."
        />
        <meta
          property="og:image"
          content="https://wtw.dev/assets/img/thumbnail.jpg"
        ></meta>
        <meta name="theme-color" content="#5b7cff" />

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
      <Navbar links={["Programs", "Sponsorships", "Memberships", "Contact"]} />
      <Landing />
      <About />

      <div className="bg-about-bg">
        <img src="./assets/img/shapes/pricingtop.svg" className="w-full" />
      </div>
      <Pricing />

      <div className="bg-white">
        <img src="./assets/img/shapes/pricingbottom.svg" className="w-full" />
      </div>
      <Membership />
      <Contact />
      <Footer />
      <AnimatePresence>
        {scrolled && (
          <motion.button
            className="fixed z-40 bottom-0 right-0 m-5 md:m-10 p-3 bg-secondary shadow-lg rounded bg-darken ease-in duration-100"
            onClick={scrollToTop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeIn", duration: 0.25 }}
          >
            <h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-chevron-up"
              >
                <polyline points="18 15 12 9 6 15"></polyline>
              </svg>
            </h1>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
