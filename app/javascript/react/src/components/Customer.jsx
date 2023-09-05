import React, { useEffect, useState } from 'react'

function Customer() {

  const [customers, setCustomers] = useState([])
  const [token, setToken] = useState("")
  const [custId, setCustId] = useState('')
  const [cardId, setCardId] = useState('')
  const [accId, setAccId] = useState('')

  const getCustomers = async () => {
    const response = await fetch('/api/v1/stripe/get_all_customers', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': token,
      },
    })

    const result = await response.json()

    if(result.customers.data) {
      setCustomers(result.customers.data)
    }
  }

  const handlePaymentTransfer = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/v1/stripe/amount_transfer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': token,
      },
      body: JSON.stringify({customer_id: custId, source_token: cardId, account_token: accId})
    });

    const result = await response.json()

    if(result.message) {
      alert(result.message)
    }

  }

  useEffect(() => {
    const csrfToken = document.querySelector('[name="csrf-token"]').getAttribute('content');
    setToken(csrfToken)

    getCustomers()
  }, [])

  return (
    <div className="container mt-5 mt-2">
      <form className='form-control w-50 p-5'>
        <div className='row'>
          <div className='col'>
            <input type='text' className='form-control mb-2' placeholder='1234 1234 1234 1234' />
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <input type='text' className='form-control mb-2' placeholder='mm' />
          </div>
          <div className='col'>
            <input type='text' className='form-control mb-2' placeholder='yy' />
          </div>
          <div className='col'>
            <input type='text' className='form-control mb-2' placeholder='cvc' />
          </div>
        </div>
        <input type='submit' className='btn btn-primary float-end' value="create-customer" />
      </form>

      <table className='table table-bordered p-2 mt-4'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Name</th>
            <th>Source Token</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((data, index) => (
            <tr key={index}>
              <td>{data.id}</td>
              <td>{data.email}</td>
              <td>{data.name}</td>
              <td>{data.default_source}</td>
            </tr>
          ))}
          <tr className={customers.length ? 'd-none' : ''}>
            <td colSpan={4}>No Customer Accounts</td>
          </tr>
        </tbody>
      </table>

      <form className='form w-50 mx-auto mt-4 p-4'>
        <div className='row'>
          <div className='col'>
            <input type='text' className='form-control' placeholder='customer-id' onKeyUp={(e) => setCustId(e.target.value)}/>
          </div>
          <div className='col'>
            <input type='text' className='form-control' placeholder='card-source-token' onKeyUp={(e) => setCardId(e.target.value)}/>
          </div>
        </div>
        <div className='row mt-2'>
          <div className='col'>
            <input type='text' className='form-control' placeholder='destination-account-id' onKeyUp={(e) => setAccId(e.target.value)}/>
          </div>
        </div>
        <input type='submit' className='btn btn-primary mt-2' value='send-amount' onClick={handlePaymentTransfer} />
      </form>
    </div>
  )
}

export default Customer