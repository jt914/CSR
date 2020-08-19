import React from "react"
import ButtonLink from "../../global/button/ButtonLink"

const Card = ({ category, title }) => {
  return (
    <div className="">
      <h2 className="text-contact font-bold text-sm md:text-base uppercase">
        {category}
      </h2>
      <h1 className="text-black font-medium text-2xl md:text-4xl">{title}</h1>
      <div className="md:grid md:grid-cols-2 col-gap-2 lg:col-gap-20 row-gap-5 w-full text-gray-500 pt-8">
        <div className="pb-6 md:pb-0">
          <h3 className="text-gray-800 text-lg font-medium">
            General Inquiries
          </h3>
          <a
            className="text-paragraph text-base ease-in duration-100 transition-colors hover:text-primary"
            href="mailto:contact@wtw.dev"
          >
            contact@wtw.dev
          </a>
        </div>
        <div className="pb-6 md:pb-0">
          <h3 className="text-gray-800 text-lg font-medium">Sponsorships</h3>
          <a
            className="text-paragraph text-base ease-in duration-100 transition-colors hover:text-primary"
            href="mailto:finance@wtw.dev"
          >
            finance@wtw.dev
          </a>
        </div>
        <div className="pb-6 md:pb-0">
          <h3 className="text-gray-800 text-lg font-medium">
            First Robotics Competition
          </h3>
          <a
            className="text-paragraph text-base ease-in duration-100 transition-colors hover:text-primary"
            href="mailto:frc@wtw.dev"
          >
            frc@wtw.dev
          </a>
        </div>
        <div className="pb-6 md:pb-0">
          <h3 className="text-gray-800 text-lg font-medium">
            AFA CyberPatriot
          </h3>
          <a
            className="text-paragraph text-base ease-in duration-100 transition-colors hover:text-primary"
            href="mailto:cyberpatriot@wtw.dev"
          >
            cyberpatriot@wtw.dev
          </a>
        </div>
        <div className="col-span-2">
          <h3 className="text-gray-900 text-lg font-medium">Mailing Address</h3>
          <a
            className="text-paragraph text-base ease-in duration-100 transition-colors hover:text-primary"
            href="https://www.google.com/maps/place/9525+Main+St,+Fairfax,+VA+22032/@38.8399134,-77.2773647,17z/data=!3m1!4b1!4m5!3m4!1s0x89b64c257d9af9d5:0x1cd1a81390493b9a!8m2!3d38.8399092!4d-77.275176"
          >
            9525 Main St, Fairfax, VA 22031
          </a>
        </div>
      </div>
    </div>
  )
}

export default Card
