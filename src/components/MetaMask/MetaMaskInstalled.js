import { useContext } from 'react'
import { Web3Context } from 'web3-hooks'
import '../../styles/MetaMask/MetaMaskInstalled.css'

const MetaMaskInstalled = () => {

  const [web3State, login] = useContext(Web3Context)

  return (
    <div className='MetaMaskInstalled'>
      <div className='cfg'>
        <h2>Connexion</h2>

        <p>MetaMask installed</p>
        {!web3State.isMetaMask && (
          <>
            <span className='mm-installed-fail'>Failed</span>
          </>
        )}
        {web3State.isMetaMask && (
          <>
            <span className='mm-installed-success'>Success</span>
          </>
        )}
        <p>Web3</p>
        {!web3State.isWeb3 && (
          <>
            <span className='mm-installed-fail'>No-Injected</span>
          </>
        )}
        {web3State.isWeb3 && (
          <>
            <span className='mm-installed-success'>Injected</span>
          </>
        )}
        <p>Logged</p>
        {web3State.isLogged && (
          <>
            <span className='mm-installed-success'>Connected</span>
          </>
        )}
        {!web3State.isLogged && (
          <>
            <p>Please connect your Wallet</p>
            <span className='mm-installed-fail'>Not connected</span>
            <br />
            <button className='mm-login' onClick={login}>login</button>
          </>
        )}
      </div>
    </div >
  )
}

export default MetaMaskInstalled
