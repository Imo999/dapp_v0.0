import React from 'react'
import { NavLink } from 'react-router-dom'
import logoComingSoon from '../assets/img/under_construction.svg'
import SocialNetwork from '../components/SocialNetwork'
import Donation from '../components/Donation'
import '../styles/Pages/ComingSoon.css'

const ComingSoon = () => {

  return (
    <div className='nav-comingSoon'>
      <div className='page-comingSoon'>
        <div className='left-comingSoon'>
          <h1>Coming Soon!</h1>
          <h3>We are working hard to give you a better experience</h3>
          <img src={logoComingSoon} alt='' className='img-comingSoon' />
        </div>
        <div className='right-comingSoon'>
          <div className='subscribe'>
            <h3>Get Notified When We Go Live</h3>
            <div className='form-comingSoon'>
              <form action='#' >
                <input type='email' className='email' placeholder='Email Adress..' />
                <input type='submit' className='submit' value='Get Notified' />
              </form>
              <div className='nav-comingSoon'>
                <NavLink to='/' className='nav-comingSoon' activeClassName='nav-active'>
                  Return Home
                </NavLink>
              </div>
            </div>
          </div>
          <div className='footer-comingSoon'>
            <footer className='footer'>
              Propulse by ©Imo999
              <SocialNetwork />
              <Donation />
              <div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ComingSoon
