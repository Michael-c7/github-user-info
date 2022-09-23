import React from 'react'
import { Navigate } from 'react-router-dom'
import { useGlobalContext } from '../context'

const ProtectedRoute = ({children, isAuthenticated}) => {
  const { isLoggedIn } = useGlobalContext()

  React.useEffect(() => {
    console.log(isLoggedIn)
  }, [])

  if(!isLoggedIn) {
    return <Navigate to='/login'/>
  }

  return (
    <div>{children}</div>
  )
}

export default ProtectedRoute