import React from 'react'
import { useContext, useState } from 'react'
import { ethers } from "ethers"
import { Web3Context } from 'web3-hooks'
import '../styles/Donation.css'

const Donation = () => {
  const [web3state] = useContext(Web3Context)
  const [eth2send, setEth2send] = useState(0)

  const donationRecipient = '0x8016310DFA7793d95F06F933D28B5e44093F370C';

  const handleClickDonate = async () => {
    const weiAmount = ethers.utils.parseEther(eth2send)
    try {
      const tx = await web3state.signer.sendTransaction({
        to: donationRecipient,
        value: weiAmount,
      })
      await tx.wait()
      console.log('TX MINED')
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <div>
      <div className='donation'>
        <h2>Thank for your donations (ETH)</h2>
        <label htmlFor='Donation'>Amount :</label>
        <input
          className='style-donation'
          id="Donation"
          type="text"
          value={eth2send}
          placeholder={"Eth Amount"}
          onChange={(event) => setEth2send(event.target.value)}>
        </input>
        <button className='btn-donation' onClick={handleClickDonate}>Donate</button>
      </div>
    </div>
  )
}

export default Donation
