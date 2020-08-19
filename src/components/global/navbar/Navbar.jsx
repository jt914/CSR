import React, { useState, useEffect, useCallback } from "react"
import PropTypes from "prop-types"
import Link from "next/link"
import { Link as Anchor, animateScroll as scroll } from "react-scroll"

import { HamburgerSqueeze } from "react-animated-burgers"

const Navbar = ({ links }) => {
  const [width, updateWidth] = useState(null)
  useEffect(() => {
    updateWidth(window.innerWidth)
    window.addEventListener("resize", () => updateWidth(window.innerWidth))

    return window.removeEventListener("resize", () =>
      updateWidth(window.innerWidth)
    )
  })

  const [scroll, setScroll] = useState(10)
  useEffect(() => {
    const onScroll = () => {
      const isScrolled = window.scrollY < 10
      if (isScrolled !== scroll) {
        setScroll(isScrolled)
      }
    }
    document.addEventListener("scroll", onScroll)

    return () => {
      document.removeEventListener("scroll", onScroll)
    }
  }, [scroll])
  const [isActive, setIsActive] = useState(false)

  const toggleButton = useCallback(
    () => setIsActive((isActive) => !isActive),
    []
  )

  return (
    <div
      className={
        scroll
          ? "w-full bg-white md:bg-transparent fixed z-20 py-6 md:py-8 top-0 transition-all duration-200 ease-in border-b border-transparent"
          : "w-full bg-blur fixed z-20 py-3 md:py-4 top-0 transition-all duration-200 ease-in border-b border-navbar-border"
      }
    >
      <div className="max-w-7xl px-6 md:flex items-center justify-between w-full mx-auto">
        <div className="md:flex items-center">
          <div className="flex items-center justify-between">
            <Link href="/">
              <a>
                <img
                  src="/assets/img/logo.png"
                  className="w-16"
                  alt="W.T. Woodson CyberSecurity and Robotics"
                />
              </a>
            </Link>
            {width < 768 && (
              <HamburgerSqueeze
                barColor="black"
                buttonWidth={30}
                {...{ isActive, toggleButton }}
              />
            )}
          </div>
          {(width > 768 || isActive) && (
            <ul className="list-inside md:flex items-center py-5 md:py-0 md:pl-5">
              {links.map((link) => {
                return (
                  <li
                    key={link}
                    className={
                      scroll
                        ? "cursor-pointer text-paragraph hover:text-primary ease-in duration-100 transition-colors py-1 md:py-0 lg:p-2 mr-4"
                        : "cursor-pointer text-paragraph hover:text-primary ease-in duration-100 transition-colors py-1 md:py-0 lg:p-2 mr-4"
                    }
                  >
                    <Anchor
                      to={`${link.toLowerCase()}`}
                      smooth={true}
                      offset={-100}
                      spy={true}
                    >
                      {link}
                    </Anchor>
                  </li>
                )
              })}
            </ul>
          )}
        </div>
        {(width > 768 || isActive) && (
          <button className="bg-secondary text-white bg-darken ease-in duration-100 rounded-md px-3 py-2">
            Join the Club
          </button>
        )}
      </div>
    </div>
  )
}

Navbar.propTypes = {
  links: PropTypes.array.isRequired,
}

export default Navbar
