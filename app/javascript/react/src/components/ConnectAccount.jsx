import React, { useEffect, useState } from 'react'

function ConnectAccount() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("")
  const [connectURL, setConnectURL]  = useState("")
  const [accounts, setAccounts] = useState([])

  const handleConnectURL = async (e) => {
    e.preventDefault();
    const spinner = document.querySelector('#spinner');
    spinner.classList.add('d-block');
    spinner.classList.remove('d-none');
    
    const response = await fetch('/api/v1/stripe/generate_connect_url', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': token,
      },
      data: JSON.stringify({name, email})
    });

    const result = await response.json();
    
    if(result?.data) {  
      setConnectURL(result.data.url)
      spinner.classList.remove('d-block');
      spinner.classList.add('d-none');
    }
  };

  const getConnectAccounts = async () => {
    const response = await fetch('/api/v1/stripe/get_connected_accounts', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': token,
      },
    });

    const result = await response.json();

    console.log({result})

    if(result.accounts.data) {
      setAccounts(result.accounts.data)
    }
  }

  useEffect(() => {
    const csrfToken = document.querySelector('[name="csrf-token"]').getAttribute('content');
    setToken(csrfToken)

    getConnectAccounts();
  }, []);

  console.log({accounts})

  return (
    
    <div>
      <form className='form w-50 mx-auto p-5' id='payment-form'>
        <div className="row">
          <div className="col">
            <input type="text" className="form-control" placeholder="name" onKeyUp={(e) => setName(e.target.value)}/>
          </div>
          <div className="col">
            <input type="text" className="form-control" placeholder="email" onKeyUp={(e) => setEmail(e.target.value)}/>
          </div>
          <div className='col'>
            <input type='submit' className='btn btn-primary' value="connect-url" onClick={handleConnectURL}/>
          </div>
        </div>
      </form>
      <div className="spinner-border text-warning d-none" role="status" style={{top: '25%', left: '50%', position: 'absolute'}} id='spinner'>
        <span className="sr-only"></span>
      </div>
      <a href={connectURL ? connectURL : ''} target='_blank'>{connectURL ? `Connect URL: ${connectURL}` : ''}</a>

      <table className='table table-bordered text-center'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Type</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((data, index) => (
            <tr key={index}>
              <td>{data.id}</td>
              <td>{data.type}</td>
              <td>{data.country}</td>
            </tr>
          ))}
          <tr className={accounts.length ? 'd-none' : ''}>
            <td colSpan={4}>No Connected Accounts</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ConnectAccount