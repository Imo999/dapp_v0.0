import { useContext } from 'react'
import { Web3Context } from 'web3-hooks'
import '../../styles/MetaMask/MetaMaskDashboard.css'
import MetaMaskBalanceOf from './MetaMaskBalanceOf'

const MetaMaskDashboard = () => {
  const [web3State] = useContext(Web3Context)

  return (
    <>
      <div className='MetaMaskDashboard'>
        <div className='informations'>
          <div className='account'>
            <h2>Account</h2>
            <p className='balance-web3'>{web3State.account}</p>
          </div>
          <div className='balance'>
            <h2>Balance</h2>
            <p className='balance-web3'>{web3State.balance} Ethers</p>
          </div>
          <div className='network-name'>
            <h2>Network name</h2>
            <p className='balance-web3'> {web3State.networkName}</p>
          </div>
          <div className='network-id'>
            <h2>Network id</h2>
            <p className='balance-web3'>{web3State.chainId}</p>
          </div>
          <div className='balanceOf'>
            <MetaMaskBalanceOf />
          </div>
        </div>
      </div>
    </>
  )
}

export default MetaMaskDashboard
