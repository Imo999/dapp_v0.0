import React from 'react'
import Navigation from '../Navigation'

const HeaderDapp = () => {
  return (
    <header className="p-5 bg-dark text-white text-center">
      <h1 className="display-1 text-primary">DAPP Interface</h1>
      <p className="h4">
        <b className='display-7 text-warning'>“Accroche ton chariot à une étoile.”</b>
        <br />
        <i className='display-9 text-warning'>-- Ralph Waldo Emerson --</i>
      </p>
      <Navigation />
    </header>
  )
}

export default HeaderDapp
