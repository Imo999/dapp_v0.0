import React from 'react'
import { ethers } from 'ethers'
import { useContext, useState } from 'react'
import { Web3Context } from 'web3-hooks'
import '../../styles/MetaMask/MetaMaskBalanceOf.css'

const MetaMaskBalanceOf = () => {
  const [web3State] = useContext(Web3Context)
  const [ethBalance, setEthBalance] = useState(0)
  const [address, setAddress] = useState(ethers.constants.AddressZero)

  const handleClickGetBalance = async () => {
    try {
      const balance = await web3State.provider.getBalance(address)
      setEthBalance(ethers.utils.formatEther(balance))
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <div className='MetaMaskBalanceOf'>
      <div className='style-balanceOf'>
        <h2>Balance Of</h2>
        <div>
          <label htmlFor='balanceOf'>{null}</label>
          <input
            className='style-getBalance'
            id='balanceOf'
            type='text'
            value={address}
            placeholder='Ethereum Address'
            onChange={(event) => setAddress(event.target.value)}>
          </input>
          <button className='button-getBalance' onClick={handleClickGetBalance}>Get Balance</button>
        </div>
        <p className='balance-address'>Address</p>
        <p className='balance-w3Address'>{address}</p>
        <p className='balance-total'>Balance</p>
        <p className='balance-w3EthBalance'>{ethBalance} ETHER</p>
      </div>
    </div>
  )
}

export default MetaMaskBalanceOf
