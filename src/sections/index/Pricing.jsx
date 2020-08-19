import React from "react"

import Header from "../../components/index/pricing/Card/Header"
import Card from "../../components/index/pricing/Card/Card"
import Button from "../../components/index/pricing/Card/Button"

const Pricing = () => {
  return (
    <div>
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              et molestie odio, finibus maximus arcu.
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
                  <Button price="500" />
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
                  <Button price="2,500" />
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
                  <Button price="5,000" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="hidden xl:block xl:absolute left-0 bottom-0 ml-16 mb-20 z-0"
          src="./assets/img/shapes/pricingleft.svg"
        />
      </div>
    </div>
  )
}

export default Pricing
