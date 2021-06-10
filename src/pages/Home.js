import React from 'react'
import Footer from '../components/Footer'
import HeaderHome from '../components/Header/HeaderHome'
import MetaMaskInstalled from '../components/MetaMask/MetaMaskInstalled'
import '../styles/Pages/Home.css'

const Home = () => {
  return (
    <>
      <HeaderHome />
      <main className='main-home'>
        <div>
          <MetaMaskInstalled />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Home
