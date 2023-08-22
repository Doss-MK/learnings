import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout } from '../features/user';

function Login() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.value)
  return (
    <div className='d-flex justify-content-center align-items-center mt-2'>
      {!user.name && (
        <button className='btn btn-primary mx-2' onClick={() => dispatch(login({id: 1, name: 'doss-mk', email: 'dossmk@gmail.com'}))}>Login</button>
      )}
      {user.name && (
        <button className='btn btn-primary' onClick={() => dispatch(logout())}>Logout</button>
      )}
    </div>
  )
}

export default Login