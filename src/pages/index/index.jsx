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
  }, [scroll])
  return (
    <div className="overflow-x-hidden">
      <Head>
        <title>W.T. Woodson CyberSecurity and Robotics</title>
        <link rel="icon" href="/favicon.ico" />
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
            className="fixed z-50 bottom-0 right-0 m-5 md:m-10 p-3 bg-secondary shadow-lg rounded"
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
