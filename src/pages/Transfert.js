import React from 'react'
import Footer from '../components/Footer'
import HeaderTransfer from '../components/Header/HeaderTransfer'
import MetaMaskTransfer from '../components/MetaMask/MetaMaskTransfer'
import '../styles/Pages/Transfer.css'

const Transfert = () => {
  return (
    <>
      <HeaderTransfer />
      <main className='main-transfer'>
        <div>
          <MetaMaskTransfer />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Transfert
