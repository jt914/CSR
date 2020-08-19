import React from "react"

import Card from "../../components/index/membership/Card"

const Membership = () => {
  const imgPath = {
    backgroundImage: `url('/assets/img/membership/membership.jpg')`,
  }
  return (
    <div>
      <div className="bg-white relative">
        <div
          id="memberships"
          className="max-w-7xl mx-auto px-6 pt-24 pb-12 md:pb-24 md:grid md:grid-cols-2"
        >
          <div
            className="flex-1 bg-cover bg-center h-64 md:h-auto"
            style={imgPath}
          ></div>
          <div className="flex items-center p-6 py-16 md:p-8 md:py-16">
            <Card
              category="Memberships"
              title="Become a Member"
              description="Registration is open to all members at W.T. Woodson Highschool and is available throughout the year. To join, fill out the application below and submit it. If you have any inquiries, please email FRC@wtw.dev"
              button="Open Application"
            />
          </div>
        </div>
        <img
          className="hidden xl:block xl:absolute right-0 bottom-0 mr-16 mb-16 z-0"
          src="./assets/img/shapes/membershipzigzag.svg"
        />
      </div>
    </div>
  )
}

export default Membership
