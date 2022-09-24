import React, { useState, useEffect } from "react"

import Header from "../../components/index/pricing/Card/Header"
import Card from "../../components/index/pricing/Card/Card"
import Button from "../../components/index/pricing/Card/Button"
import Modal from "../../components/global/modal/Modal"

const Pricing = () => {
  const [isOpen, openDonate] = useState(false)
  const handleClose = () => {
    openDonate(!isOpen)
  }
  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto")
    return
  })
  return (
    <div className="relative">
      <div className="bg-pricing-bg relative">
        <div
          id="sponsorships"
          className="mx-auto max-w-7xl px-6 py-24 text-center relative z-10"
        >
          <div className="text-center pb-10">
            <h3 className="text-base font-bold text-pricing-btn uppercase tracking-widest">
              Sponsorships
            </h3>
            <h1 className="text-3xl md:text-4xl font-medium text-white">
              Support the Organization
            </h1>
            <p className="text-pricing-paragraph text-base max-w-lg mx-auto leading-relaxed pt-2">
              Consider donating to help support our mission to provide STEM
              opportunities to all students at Woodson. All cash donations are
              tax exempt. 
              <a
              className = 'text-white ease-in duration-100 ' 
              target = "_blank" href = "SP.pdf"> View our sponsorship packet.</a>
            </p>
            
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-8">
            <div className="flex flex-col transform hover:scale-105 transition-transform ease-in duration-100">
              <Header tier="Bronze" />
              <div className="flex-1 flex flex-col bg-pricing-card-bg rounded-lg">
                <Card
                  tier="Bronze"
                  price="250"
                  features={[
                    "Business name and logo on website",
                    "Social media shoutout on team Instagram and Twitter page",
                    "Thank you letter",
                  ]}
                />
                <div className="p-6 mt-auto w-full">
                  <Button onclick={handleClose} price="250" />
                </div>
              </div>
            </div>
            <div className="flex flex-col transform hover:scale-105 transition-transform ease-in duration-100">
              <Header tier="Silver" />
              <div className="flex-1 flex flex-col bg-pricing-card-bg rounded-lg">
                <Card
                  tier="Silver"
                  price="500"
                  features={[
                    "Small company logo on T-Shirts and promotional materials",
                    "Small logo on team robots",
                    "Name and logo on team videos",
                  ]}
                />

                <div className="p-6 mt-auto w-full">
                  <Button onclick={handleClose} price="500" />
                </div>
              </div>
            </div>
            <div className="flex flex-col transform hover:scale-105 transition-transform ease-in duration-100">
              <Header tier="Gold" />
              <div className="flex-1 flex flex-col bg-pricing-card-bg rounded-lg">
                <Card
                  tier="Gold"
                  price="2,000"
                  features={[
                    "Medium company logo on T-Shirts and promotional materials",
                    "Medium logo on team robots and merchandise",
                    "Logo on team banner",
                  ]}
                />
                <div className="p-6 mt-auto w-full">
                  <Button onclick={handleClose} price="2,000" />
                </div>
              </div>
            </div>
            <div className="flex flex-col transform hover:scale-105 transition-transform ease-in duration-100">
              <Header tier="Platinum" />
              <div className="flex-1 flex flex-col bg-pricing-card-bg rounded-lg">
                <Card
                  tier="Platinum"
                  price="5,000"
                  features={[
                    "Large company logo on T-Shirts and promotional materials",
                    "Large logo on team robots and merchandise",
                    "Dedicated banner in the pit",
                    "Team gifts and merchandise",
                  ]}
                />
                <div className="p-6 mt-auto w-full">
                  <Button onclick={handleClose} price="5,000" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="hidden xl:block xl:absolute left-0 bottom-0 ml-16 mb-20 z-0"
          src="./assets/img/shapes/pricingleft.svg"
        />
        <img
          className="hidden xl:block xl:absolute right-0 top-0 mr-20 mt-5 z-0"
          src="./assets/img/shapes/pricingright.svg"
        />
      </div>
      <Modal
        onclick={handleClose}
        isOpen={isOpen}
        title="Make a Donation"
        type="pricing"
      />
    </div>
  )
}

export default Pricing
