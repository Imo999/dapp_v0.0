import React from 'react'
import SwitchNav from '../Navigation/SwitchNav'
import '../../styles/Header/HeaderTransfer.css'

const HeaderTransfer = () => {
  return (
    <header className="header-transfer">
      <h1>Transfer</h1>
      <p className='header-citation'>“L’obstination est le chemin de la réussite.”</p>
      <p className='header-author'>-- Charlie Chaplin --</p>
      <SwitchNav />
    </header>
  )
}

export default HeaderTransfer
