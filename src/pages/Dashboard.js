import React from 'react'
import { useCustomAuth } from '../authContextStore/AuthProvider'

const Dashboard = () => {
  const {user}=useCustomAuth();
  return (
    <div>Dashboard, {user}</div>
  )
}

export default Dashboard