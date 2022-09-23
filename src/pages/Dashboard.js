import React from 'react'
import LogoutButton from '../components/LogoutButton'
import Profile from '../components/Profile'

const Dashboard = () => {
  return (
    <div>
      <h1>dashboard</h1>
      <LogoutButton/>
      <div style={{padding:'1.5rem 0'}}>
      <Profile/>
      </div>

    </div>
  )
}

export default Dashboard