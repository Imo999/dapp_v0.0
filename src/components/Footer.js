import React from 'react'
import SocialNetwork from './SocialNetwork'
import '../styles/Footer.css'
import '../styles/SocialNetwork.css'
import Donation from './Donation'

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
