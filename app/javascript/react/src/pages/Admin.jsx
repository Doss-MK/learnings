import React from 'react'
import { useSelector } from 'react-redux'
import Login from './Login'
import { useDispatch } from 'react-redux'
import { changeColor } from '../features/theme'

function Admin() {
  const user = useSelector(state => state.user.value)
  const color = useSelector(state => state.theme.value)

  console.log({color})
  const dispatch = useDispatch();

  return (
    <>
      {user.name && (
        <div>
          <table className={`table table-bordered w-50 mx-auto mt-5 table-${color.bgcolor}`} >
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            </tbody>
          </table>

          <button className='btn btn-danger d-block mx-auto' onClick={() => dispatch(changeColor({bgcolor: 'secondary'}))}>Change Background</button>
        </div>
      )}

      <Login />
    </>
  )
}

export default Admin