import React from 'react'

const PrintUser = ({users, handleDeleteUser}) => {
  console.log({users1:users})
  return (
    <table className='table table-bordered w-50 mx-auto mt-5'>
        <thead>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
        </tr>
        </thead>
        <tbody>
          {users.map((user_info) => (
            <tr key={user_info.id}>
              <td>{user_info.id}</td>
              <td>{user_info.name}</td>
              <td>{user_info.email}</td>
              <td><i className="bi bi-trash3-fill mx-2" onClick={() => handleDeleteUser(user_info.id)}></i></td>
            </tr>
          ))}
        </tbody>
    </table>
  )
}

export default PrintUser