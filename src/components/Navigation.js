import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
      <NavLink to='/' className='display-6 text-decoration-none p-3 ' activeClassName='nav-active'>
        Home
      </NavLink>
      <NavLink to='/dapp' className='display-6 text-decoration-none p-3' activeClassName='nav-active'>
        Dapp
      </NavLink>
    </div>
  )
}

export default Navigation
