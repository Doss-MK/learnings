import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import PrintUser from './PrintUser';

const User = () => {
  const [users, setUsers] = useState([])
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [token, setToken] = useState("")

  const getUsers = async () => {
    const response = await fetch('/api/v1/users');
    const result = await response.json();
    
    setUsers(result);
  };

  const handleUserCreate = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': token,
      },
      body: JSON.stringify({name: name, email: email})
    });
    
    const result = await response.json();
    setUsers([...users, result.user]);
  };

  const handleDeleteUser = async (id) => {
    const response = await fetch(`/api/v1/users/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': token,
      },
      data: JSON.stringify({id: id})
    })

    const result = await response.json();

    console.log({result})
    if(result) {
      const updatedUsers = users.filter(user => user.id !== id);
      setUsers(updatedUsers);
    }
  }

  useEffect(() => {
    getUsers();

    const csrfToken = document.querySelector('[name="csrf-token"]').getAttribute('content');
    setToken(csrfToken)
    
  }, []);

  return (
    <div>
      <h3 className='text-center'>User API</h3>
      <div className='mx-auto w-50 bg-light p-5'>
        <form className='form mt-5' method='post' id='user-form'>
          <h4 className='text-center'>Add New User</h4>
          <input type="hidden" name="authenticity_token" value={token} />
          <input type='text' name='name' className='form-control mb-2' placeholder='user name' onKeyUp={(e) => setName(e.target.value)} />
          <input type='email' name='email' className='form-control mb-2' placeholder='user email' onKeyUp={(e) => setEmail(e.target.value)} />
          <input type='submit' className='btn btn-primary' value='create-user' onClick={handleUserCreate}/>
        </form>

      </div>

      
      
      { users.length ? <PrintUser users={users} handleDeleteUser={handleDeleteUser} /> : '' }

      <Link to="/fw/react/home">Home</Link>
    </div>
  )
}

export default User