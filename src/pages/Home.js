import React from 'react'
import Footer from '../components/Footer'
import HeaderHome from '../components/Header/HeaderHome'
import MetaMaskInstalled from '../components/MetaMask/MetaMaskInstalled'

const Home = () => {
  return (
    <>
      <HeaderHome />
      <main className='home'>
        <div>
          <MetaMaskInstalled />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Home
