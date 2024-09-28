import React from 'react'
import { useConnection, useWallet } from '@solana/wallet-adapter-react'

const Airdrop = () => {

const wallet = useWallet()
const {connection} = useConnection()

async function sendAirdrop() {
    const amt = document.getElementById("publicKey").value
    console.log('AMt', amt)
    await connection.requestAirdrop(wallet.publicKey, amt * 1000000000)
}

  return (
    <div className='flex flex-row'> 
        <input id='publicKey' type="Amount" />
        <button onClick={sendAirdrop}>Send Airdrop</button>
    </div>
  )
}

export default Airdrop