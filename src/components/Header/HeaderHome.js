import React from 'react'
import SwitchNav from '../Navigation/SwitchNav'
import '../../styles/Header/HeaderHome.css'

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
