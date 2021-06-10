import React from 'react'
import Footer from '../components/Footer'
import HeaderBalance from '../components/Header/HeaderBalance'
import MetaMaskDashboard from '../components/MetaMask/MetaMaskDashboard'
import '../styles/Balance.css'

const Balance = () => {

  return (
    <>
      <HeaderBalance />
      <main className='main-balance'>
        <MetaMaskDashboard />
      </main>
      <Footer />
    </>
  )
}

export default Balance
