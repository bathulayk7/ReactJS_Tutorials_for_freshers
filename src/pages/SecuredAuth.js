import React from 'react'
import { useCustomAuth } from '../authContextStore/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom'

const SecuredAuth = ({children}) => {
  const {user}=useCustomAuth()
  const location=useLocation();
  if(!user){
    return <Navigate to="/login" state={{path:location.pathname}} />
  }
  return children
}

export default SecuredAuth