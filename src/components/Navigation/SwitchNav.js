import { useContext } from 'react'
import { Web3Context } from 'web3-hooks'
import Connexion from './Connexion'
import Navigation from './Navigation'

// TODOO : Mettre accès obligatoire pour switch

const SwitchNav = () => {
  const [web3State] = useContext(Web3Context)

  return (
    <div>
      {web3State.isLogged && (
        <>
          <Navigation />
        </>
      )}
      {!web3State.isLogged && (
        <>
          <Connexion />
        </>
      )}
    </div>
  )
}

export default SwitchNav
