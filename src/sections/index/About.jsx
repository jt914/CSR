import React from "react"

import Sponsors from "../../components/index/sponsors/Sponsors"
import Card from "../../components/index/about/Card"

function About() {
  return (
    <div>
      <div className="bg-about-bg pb-24 relative">
        <Sponsors />
        <div className="mx-auto max-w-7xl px-4 pt-40 pb-24 text-center">
          <h2
            id="programs"
            className="text-pink-500 font-bold text-sm md:text-base uppercase"
          >
            Mission
          </h2>
          <h1 className="text-black font-medium text-3xl md:text-4xl">
            Explore, Learn, and Compete
          </h1>
          <p className="text-paragraph max-w-3xl mx-auto leading-7 pt-4 md:pt-2">
            Students work together in teams across various competitions, learn
            from trained mentors, and experience STEM at a level that will
            prepare them for their future careers.
            {/* From prototyping and modeling
            to coding and cybersecurity, students will experience engineering
            and computer science at a rich level. */}
          </p>
        </div>
        <Card
          direction="forward"
          category="Program"
          title="FIRST Robotics Competition"
          description="The FIRST Robotics Competition is an international robotics competition where a team of students works in conjunction with their mentors during the 6-week build season to develop and build their robot to solve each year’s challenge. The process of building the robot includes designing, prototyping, programming, and even fabricating the materials."
          color="text-about-category"
          link="https://www.firstinspires.org/robotics/frc"
          image="frc"
        />
        <Card
          direction="backwards"
          category="Program"
          title="AFA CyberPatriot"
          description="The CyberPatriot competition is a national cybersecurity competition hosted by the Air Force Association where teams of 6 compete to secure their virtual operating systems. Teams are provided with vulnerabilities to fix, and as they progress to further rounds, the number of challenges increase."
          color="text-about-category"
          link="https://www.uscyberpatriot.org/"
          image="cp"
        />
      </div>
    </div>
  )
}

export default About
