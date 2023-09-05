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
          <tr>
            <td>3</td>
            <td><Link to="/fw/react/profile">Admin Profile</Link></td>
          </tr>
          <tr>
            <td>4</td>
            <td><Link to="/fw/react/cake">Cake</Link></td>
          </tr>
          <tr>
            <td>5</td>
            <td><Link to="/fw/react/ice-cream">IceCream</Link></td>
          </tr>
          <tr>
            <td>6</td>
            <td><Link to="/fw/react/hooks">Hooks</Link></td>
          </tr>
          <tr>
            <td>7</td>
            <td><Link to="/fw/react/antd">Antd</Link></td>
          </tr>
          <tr>
            <td>8</td>
            <td><Link to="/fw/react/material">Material</Link></td>
          </tr>
          <tr>
            <td>9</td>
            <td><Link to="/fw/react/stripe">Stripe</Link></td>
          </tr>
        </tbody>
      </table>
    </div>
    
  )
}

export default Home;