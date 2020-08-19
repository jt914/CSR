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
            <h3 className="text-base font-bold text-pricing-btn uppercase">
              Sponsorships
            </h3>
            <h1 className="text-3xl md:text-4xl font-medium text-white">
              Support the Organization
            </h1>
            <p className="text-pricing-paragraph text-base max-w-lg mx-auto leading-relaxed pt-2">
              Consider donating to help support our mission to provide STEM
              opportunities to all students at Woodson. All cash donations are
              tax exempt.
            </p>
          </div>
          <div className="grid md:grid-cols-3 grid-flow-row md:grid-flow-col gap-4 lg:gap-8">
            <div className="flex flex-col transform hover:scale-105 transition-transform ease-in duration-100">
              <Header tier="Bronze" />
              <div className="flex-1 flex flex-col bg-pricing-card-bg rounded-lg">
                <Card
                  tier="Bronze"
                  price="500"
                  features={[
                    "Small logo on team merchandise",
                    "Organization featured on sponsors page",
                  ]}
                />
                <div className="p-6 mt-auto w-full">
                  <Button onclick={handleClose} price="500" />
                </div>
              </div>
            </div>
            <div className="flex flex-col transform hover:scale-105 transition-transform ease-in duration-100">
              <Header tier="Silver" />
              <div className="flex-1 flex flex-col bg-pricing-card-bg rounded-lg">
                <Card
                  tier="Silver"
                  price="2,500"
                  features={[
                    "All benefits from Bronze tier",
                    "Medium logo on team robots and merchandise",
                    "Plaque recognizing contribution",
                  ]}
                />

                <div className="p-6 mt-auto w-full">
                  <Button onclick={handleClose} price="2,500" />
                </div>
              </div>
            </div>
            <div className="flex flex-col transform hover:scale-105 transition-transform ease-in duration-100">
              <Header tier="Gold" />
              <div className="flex-1 flex flex-col bg-pricing-card-bg rounded-lg">
                <Card
                  tier="Gold"
                  price="5,000"
                  features={[
                    "All benefits from Silver tier",
                    "Logo and name on all promotional videos and featured at school events",
                    "Large logo on team robots and merchandise",
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
