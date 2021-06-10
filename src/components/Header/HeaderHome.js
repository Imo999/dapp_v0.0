import React from 'react'
import Navigation from '../Navigation'

const HeaderHome = () => {
  return (
    <header className="p-5 bg-dark text-white text-center">
      <h1 className="display-1 text-primary">Welcome</h1>
      <p className="h4">
        <b className='display-7 text-warning'>"La plus belle réussite c'est de ne pas lâcher prise."</b>
        <br />
        <i className='display-9 text-warning'>-- William Dubois --</i>
      </p>
      <Navigation />
    </header>
  )
}

export default HeaderHome
