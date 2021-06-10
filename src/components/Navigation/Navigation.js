import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../styles/Navigation.css'

const Navigation = () => {
  return (
    <div>
      <div className='navigation'>
        <NavLink to='/' className='nav-home' activeClassName='nav-active'>
          Connexion
      </NavLink>
        <NavLink to='/Balance' className='nav-dapp' activeClassName='nav-active'>
          Balance
      </NavLink>
        <NavLink to='/junk' className='nav-junk' activeClassName='nav-active'>
          Transfert
      </NavLink>
        <NavLink to='/junk' className='nav-junk' activeClassName='nav-active'>
          Junk
      </NavLink>
      </div>
    </div>
  )
}

export default Navigation
