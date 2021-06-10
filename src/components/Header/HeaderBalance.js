import React from 'react'
import Navigation from '../Navigation/Navigation'
import '../../styles/Header/HeaderBalance.css'

const HeaderBalance = () => {
  return (
    <header className="header-balance">
      <h1>Balance</h1>
      <p className='header-citation'>“Accroche ton chariot à une étoile.”</p>
      <p className='header-author'>-- Ralph Waldo Emerson --</p>
      <Navigation />
    </header>
  )
}

export default HeaderBalance
