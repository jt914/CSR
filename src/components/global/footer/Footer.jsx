import React from "react"

import Header from "./Header"
import FooterLinks from "./FooterLinks"

const Footer = () => {
  return (
    <div>
      <div className="bg-footer w-full pt-16 pb-8 relative">
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="px-8 pb-24">
            <img src="./assets/img/logo.png" className="h-8 mb-4" />
            <div className="grid grid-cols-4 gap-6">
              <div className="col-span-4 lg:col-span-2">
                <Header title="Cybersecurity and Robotics" />
                <p className="text-footer-text pb-2 text-base">
                  Providing students with hands-on STEM opportunities.
                </p>
                <div className="flex items-center pt-2">
                  <a href="mailto:contact@wtw.dev" className="mr-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="#ffffff33"
                      stroke="#fff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-mail"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </a>
                  <a href="https://twitter.com/WTWCSR" className="mr-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="#03A9F433"
                      stroke="#03A9F4"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-twitter"
                    >
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  </a>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="#f34d5533"
                      stroke="#f34d55"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-instagram"
                    >
                      <rect
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="col-span-2 lg:col-span-1">
                <Header title="Programs" />
                <FooterLinks type="external" />
              </div>
              <div className="col-span-2 lg:col-span-1">
                <Header title="Navigation" />
                <FooterLinks
                  linkarray={["Sponsorships", "Memberships"]}
                  type="navigation"
                />
              </div>
            </div>
          </div>
          <div className="w-full border-t border-footer-border">
            <div className="flex justify-between px-8 pt-8">
              <p className="text-footer-text text-sm">Established 2020</p>
              <div className="flex items-center">
                <p className="text-footer-text text-sm pr-2">Made with</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="#F8799933"
                  stroke="#F87999"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-heart"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute right-0 top-0 z-0"
          src="./assets/img/shapes/footerellipse.svg"
        />
      </div>
    </div>
  )
}

export default Footer
