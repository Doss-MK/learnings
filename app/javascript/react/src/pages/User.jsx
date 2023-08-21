import React from 'react'
import { Link } from "react-router-dom"

function User() {
  return (
    <div>
      <h3>User Page</h3>
      <Link to="/fw/react/home">Home</Link>
    </div>
  )
}

export default User