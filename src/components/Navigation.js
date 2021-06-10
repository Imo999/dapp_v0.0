import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
      <NavLink to='/' className='nav-home' activeClassName='nav-active'>
        Home
      </NavLink>
      <NavLink to='/dapp' className='nav-dapp' activeClassName='nav-active'>
        Dapp
      </NavLink>
    </div>
  )
}

export default Navigation
