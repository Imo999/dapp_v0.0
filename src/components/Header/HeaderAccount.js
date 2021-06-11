import React from 'react'
import SwitchNav from '../Navigation/SwitchNav'
import '../../styles/Header/HeaderAccount.css'

const HeaderAccount = () => {
  return (
    <header className="header-Account">
      <h1>Account</h1>
      <p className='header-citation'>“Accroche ton chariot à une étoile.”</p>
      <p className='header-author'>-- Ralph Waldo Emerson --</p>
      <SwitchNav />
    </header>
  )
}

export default HeaderAccount
