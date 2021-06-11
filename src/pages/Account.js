import React from 'react'
import Footer from '../components/Footer'
import HeaderBalance from '../components/Header/HeaderAccount'
import MetaMaskDashboard from '../components/MetaMask/MetaMaskDashboard'
import '../styles/Pages/Account.css'

const Account = () => {

  return (
    <>
      <HeaderBalance />
      <main className='main-Account'>
        <MetaMaskDashboard />
      </main>
      <Footer />
    </>
  )
}

export default Account
