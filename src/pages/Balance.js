import { useContext } from 'react'
import { Web3Context } from 'web3-hooks'
import Footer from '../components/Footer'
import HeaderDapp from '../components/Header/HeaderDapp'
import '../styles/Balance.css'

const Balance = () => {
  const [web3State] = useContext(Web3Context)

  return (
    <>
      <HeaderDapp />
      <main className='main-balance'>
        <div>
          <p className='id'> Network id : {web3State.chainId}</p>
          <p className='network'> Network name : {web3State.networkName}</p>
          <p className='account'> Account : {web3State.account}</p>
          <p className='balance'> Balance : {web3State.balance}</p>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Balance
