import React from 'react'
import Navigation from '../Navigation/Navigation'

const HeaderBalance = () => {
  return (
    <header className="header-home">
      <h1>DAPP Interface</h1>
      <p className='header-citation'>“Accroche ton chariot à une étoile.”</p>
      <p className='header-author'>-- Ralph Waldo Emerson --</p>
      <Navigation />
    </header>
  )
}

export default HeaderBalance
