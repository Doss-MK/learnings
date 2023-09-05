import React from 'react'
import ConnectAccount from '../components/ConnectAccount'
import Customer from '../components/Customer'

function Stripe() {
  return (
    <div className='container mx-auto w-75 mt-5 bg-light'>
        <ConnectAccount />
        <Customer />
    </div>
  )
}

export default Stripe