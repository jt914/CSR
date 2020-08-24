import React from "react"

import ButtonLink from "../../components/global/button/ButtonLink"
import TextLink from "../../components/global/button/TextLink"

const Landing = () => {
  return (
    <div>
      <div className="py-32 lg:py-64 px-6 max-w-7xl mx-auto relative">
        <div className="md:w-1/2">
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl max-w-3xl">
            Providing Students with Hands-On STEM Opportunities
          </h1>
          <p className="text-base lg:text-lg text-paragraph leading-relaxed py-10 max-w-2xl">
            Our Cybersecurity and Robotics program provide students with unique
            STEM opportunities and experience to educate and help students
            explore the different fields of STEM through competitions and other
            activities.
          </p>
          <div className="flex items-center">
            <ButtonLink
              text="Join the Club"
              link="join"
              type="link"
              color="bg-primary"
            />
            <TextLink
              text="Become a Sponsor"
              link="sponsorships"
              color="text-primary"
            />
          </div>
        </div>
        <div className="hidden md:block md:w-1/2">
          <img
            src={require("./assets/img/Members.png?lqip")}
            className="absolute top-0 right-0 w-2/5"
          />
        </div>
      </div>
      {/* <div className="py-32 lg:py-64 px-6 max-w-7xl mx-auto grid grid-cols-2">
        <div className="col-span-1">
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl">
            Providing Students with Hands-On STEM Opportunities
          </h1>
          <p className="text-base lg:text-lg text-paragraph leading-relaxed py-10 max-w-2xl">
            Our Cybersecurity and Robotics program provide students with unique
            STEM opportunities and experience to educate and help students
            explore the different fields of STEM through competitions and other
            activities.
          </p>
          <div className="flex items-center">
            <ButtonLink text="Join the Club" link="join" color="bg-primary" />
            <TextLink
              text="Become a Sponsor"
              link="sponsor"
              color="text-primary"
            />
          </div>
        </div>
        <div className=" col-span-1 w-4/5 mx-auto">
          <img src="./assets/img/Landing.png" className="" />
        </div>
      </div> */}
    </div>
  )
}

export default Landing
