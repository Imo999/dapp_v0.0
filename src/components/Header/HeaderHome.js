import React from 'react'
import '../../styles/HeaderHome.css'
import { } from 'web3-hooks'
import SwitchNav from '../Navigation/SwitchNav'

const HeaderHome = () => {
  return (
    <header className="header-home">
      <h1>Welcome</h1>
      <p className='header-citation'>"La plus belle réussite c'est de ne pas lâcher prise."</p>
      <p className='header-author'>-- William Dubois --</p>
      <SwitchNav />
    </header>
  )
}

export default HeaderHome
