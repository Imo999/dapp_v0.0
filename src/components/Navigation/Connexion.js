import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../styles/Navigation/Connexion.css'

const Connexion = () => {
  return (
    <div>
      <div className='connexion'>
        <NavLink to='/' className='connexion-home' activeClassName='nav-active'>
          Connexion
      </NavLink>
      </div>
    </div>
  )
}

export default Connexion
