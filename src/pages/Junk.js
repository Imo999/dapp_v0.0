import React from 'react'
import Footer from '../components/Footer'
import MetaMaskInstalled from '../components/MetaMask/MetaMaskInstalled'
import Connexion from '../components/Navigation/Connexion'

const Junk = () => {

  return (
    <div>
      <Connexion />
      <MetaMaskInstalled />
      <Footer />
    </div>
  )
}

export default Junk
