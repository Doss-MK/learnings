import React from 'react'
import { Link } from "react-router-dom"

function Home() {
  return (
    <div>
      <table className='table table-bordered mx-auto w-50 mt-5'>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Nav Page</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td><Link to="/fw/react/user">User API</Link></td>
          </tr>
          <tr>
            <td>2</td>
            <td><Link to="/fw/react/admin">Admin Redux Login</Link></td>
          </tr>
        </tbody>
      </table>
    </div>
    
  )
}

export default Home;