import Head from 'next/head'

import Navbar from '../../components/global/navbar/Navbar'
import Landing from '../../sections/index/Landing'
import About from '../../sections/index/About'

export default function Home() {
  return (
    <div>
      <Head>
        <title>W.T. Woodson CyberSecurity and Robotics</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar links={['Programs', 'Sponsorships', 'Membership', 'Contact']} />
      <Landing />
      <About />
    </div>
  )
}
