import React from 'react'
import { Link } from "react-router-dom"

function Home() {
  return (
    <div>
      <h3>Home Page</h3>
      <Link to="/fw/react/user">User Page</Link>
    </div>
    
  )
}

export default Home;