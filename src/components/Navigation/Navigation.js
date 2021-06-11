import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../styles/Navigation/Navigation.css'

const Navigation = () => {
  return (
    <div>
      <div className='navigation'>
        <NavLink to='/' className='nav-home' activeClassName='nav-active'>
          Connexion
      </NavLink>
        <NavLink to='/Account' className='nav-dapp' activeClassName='nav-active'>
          Account
      </NavLink>
        <NavLink to='/Transfer' className='nav-junk' activeClassName='nav-active'>
          Transfert
      </NavLink>
        <NavLink to='/ComingSoon' className='nav-junk' activeClassName='nav-active'>
          Contracts
      </NavLink>
      </div>
    </div>
  )
}

export default Navigation
