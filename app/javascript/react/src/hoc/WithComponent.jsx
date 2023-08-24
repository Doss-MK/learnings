import React from 'react'

let isAuthenticated = true

function WithComponent(Component) {
  return function() {
    if(!isAuthenticated) {
        return <div>User is not authenticated!</div>
    }
    return <Component />
  }
}

export default WithComponent