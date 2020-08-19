import React from "react"
import { Link as Anchor, animateScroll as scroll } from "react-scroll"

const FooterLinks = ({ linkarray, type }) => {
  return (
    <div>
      {type == "external" ? (
        <ul>
          <li className="text-footer-text pb-2 text-base">
            <a
              href="https://www.firstinspires.org/robotics/frc"
              className="hover:text-tertiary ease-in duration-100 transition-colors"
            >
              FIRST Robotics Competition
            </a>
          </li>
          <li className="text-footer-text pb-2 text-base">
            <a
              href="https://www.uscyberpatriot.org/"
              className="hover:text-tertiary ease-in duration-100 transition-colors"
            >
              CyberPatriot
            </a>
          </li>
        </ul>
      ) : (
        <ul>
          {linkarray.map((link) => {
            return (
              <li
                className="text-footer-text mb-2 text-base cursor-pointer"
                key={link}
              >
                <Anchor
                  to={`${link.toLowerCase()}`}
                  smooth={true}
                  offset={-100}
                  className="hover:text-tertiary ease-in duration-100 transition-colors"
                >
                  {link}
                </Anchor>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export default FooterLinks
