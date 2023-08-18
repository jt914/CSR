import React from "react"

import ButtonLink from "../../components/global/button/ButtonLink"
import TextLink from "../../components/global/button/TextLink"
//import { Image } from "../../components/global/image/Image"

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
              link="https://forms.gle/Vd49MrsfH7mdvsYN6"
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
        <div id="image-container" className="hidden md:block md:w-1/2">
          <picture className="absolute top-0 right-0 w-2/5">
            {/* <source
              srcSet={require("../../../public/assets/img/Members.webp")}
              type="image/webp"
            />
            <source
              srcSet={require("../../../public/assets/img/Members.png")}
              type="image/png"
            /> */}
            <img
              alt="Members"
              className="blur-image"
              src={require("../../../public/assets/img/Members.png?lqip")}
              type="image/png"
            />
            <img
              alt="Members"
              src={require("../../../public/assets/img/Members.png?webp")}
              type="image/png"
            />
          </picture>
          <style jsx>{`
        .image-container: {
          position: relative;
        }
        .blur-image img {
          blur(25px);
          width: 300px;
          height: 200px;
        }
        img {
          position: absolute;
          width: 100%;
          top: 0;
          left: 0;
        }
    `}</style>
        </div>
      </div>
    </div>
  )
}

export default Landing
