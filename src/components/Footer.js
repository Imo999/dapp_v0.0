import React from 'react'
import SocialNetwork from './SocialNetwork'
import Donation from './Donation'
import '../styles/Footer.css'
import '../styles/SocialNetwork.css'

const Footer = () => {

  return (
    <footer className='footer'>
      Propulse by ©Imo999
      <SocialNetwork />
      <div>
        <Donation />
      </div>
    </footer>
  )
}

export default Footer
