import { useContext } from 'react'
import { Web3Context } from 'web3-hooks'
import SwitchNav from '../Navigation/SwitchNav'
import '../../styles/MetaMask/MetaMaskDashboard.css'

const MetaMaskDashboard = () => {
  const [web3State] = useContext(Web3Context)

  return (
    <>
      <SwitchNav />
      <div>
        <p className='id'> Network id : {web3State.chainId}</p>
        <p className='network'> Network name : {web3State.networkName}</p>
        <p className='account'> Account : {web3State.account}</p>
        <p className='balance'> Balance : {web3State.balance}</p>
      </div>
    </>
  )
}

export default MetaMaskDashboard
