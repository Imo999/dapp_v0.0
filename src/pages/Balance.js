import { useContext } from 'react'
import { Web3Context } from 'web3-hooks'
import Footer from '../components/Footer'
import HeaderBalance from '../components/Header/HeaderBalance'
import '../styles/Balance.css'

const Balance = () => {
  const [web3State] = useContext(Web3Context)

  return (
    <>
      <HeaderBalance />
      <main className='main-balance'>
        INTERFACE BALANCE
      </main>
      <Footer />
    </>
  )
}

export default Balance
