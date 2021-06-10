import React from 'react'
import SwitchNav from '../Navigation/SwitchNav'
import '../../styles/Header/HeaderBalance.css'

const HeaderBalance = () => {
  return (
    <header className="header-balance">
      <h1>Balance</h1>
      <p className='header-citation'>“Accroche ton chariot à une étoile.”</p>
      <p className='header-author'>-- Ralph Waldo Emerson --</p>
      <SwitchNav />
    </header>
  )
}

export default HeaderBalance
