import React from 'react'
import { ethers } from 'ethers'
import { useContext, useState } from 'react'
import { Web3Context } from 'web3-hooks'
import '../../styles/MetaMask/MetaMaskTransfer.css'

const MetaMaskTransfer = () => {
  const [web3State] = useContext(Web3Context)
  const [setEthBalance] = useState(0)
  const [address, setAddress] = useState(ethers.constants.AddressZero)
  const [eth2Send, setEth2Send] = useState(0)

  const handleClickGetBalance = async () => {
    try {
      const balance = await web3State.provider.getBalance(address)
      setEthBalance(ethers.utils.formatEther(balance))
    } catch (e) {
      console.log(e)
    }
  }

  const handleClickSend = async () => {
    const weiAmount = ethers.utils.parseEther(eth2Send)
    try {
      const tx = await web3State.signer.sendTransaction({ to: address, value: weiAmount })
      await tx.wait()
      console.log('TX MINED')
    } catch (e) {
      // TODO : code -32000 : Insufisant found && code 4001 : Reject trasaction 
      console.log('##################################')
      console.log(e)
    }
  }
  return (
    <div className='MetaMaskTransfer'>
      <div className='style-MetaMaskTransfer'>
        <h2>Address</h2>
        <p>Choose destination address</p>
        <div>
          <label htmlFor='chooseAddress'>{null}</label>
          <input
            className='style-chooseAddress'
            id='chooseAddress'
            type='text'
            value={address}
            placeholder='Ethereum Address'
            onChange={(event) => setAddress(event.target.value)}>
          </input>
          <button className='btn-chooseAddress' onClick={handleClickGetBalance}>Confirm</button>
        </div>

        <div>
          <h2>Verify</h2>
          <p>Verify destination address</p>
          <label className='address-eth2send' htmlFor="eth2send">{address}</label>

          <h2>Amount</h2>
          <p>Choose amount to transfer (ETH)</p>
          <input
            className='style-eth2send'
            id="eth2Send"
            type="text"
            placeholder="Ethereum Amount"
            value={eth2Send}
            onChange={(event) => setEth2Send(event.target.value)}
          />
        </div>

        <button className='btn-eth2send' onClick={handleClickSend}>send</button>
      </div>
    </div>
  )
}

export default MetaMaskTransfer
