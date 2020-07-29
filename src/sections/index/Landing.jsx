import React from 'react'

import ButtonLink from '../../components/global/button/ButtonLink'
import TextLink from '../../components/global/button/TextLink'

const Landing = () => {
  return (
    <div>
      <div className="py-64 px-4 max-w-7xl mx-auto relative">
        <div className="w-2/3 pr-20">
          <h1 className="font-bold text-5xl">
            Providing Students with Hands-On STEM Opportunities
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed py-10">
            Our CSR - Cyber Security and Robotics program provide students with
            unique STEM opportunities and experience to educate and help
            students explore the different fields of STEM through competitions
            and other activities.
          </p>
          <div className="flex items-center">
            <ButtonLink
              text="Join the Club"
              link="join"
              color="bg-indigo-500"
            />
            <TextLink
              text="Become a Sponsor"
              link="sponsor"
              color="text-indigo-500"
            />
          </div>
        </div>
        <div className="w-1/3">
          <img
            src="./assets/img/Members.png"
            className="absolute top-0 right-0 w-1/3"
          />
        </div>
      </div>
    </div>
  )
}

export default Landing
