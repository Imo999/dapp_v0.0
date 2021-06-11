import React from 'react'
import '../styles/Pages/ComingSoon.css'
import logoComingSoon from '../assets/img/under_construction.svg'
import Footer from '../components/Footer'
import { NavLink } from 'react-router-dom'

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
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ComingSoon
