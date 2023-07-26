import React from 'react'
import { useLocation } from 'react-router-dom'

const Contact = () => {
  const location=useLocation();
  return (
    <div >
      <div>Contact</div>
      <div>
        {
          location.state && location.state.addr? location.state.addr:""
        }
      </div>
    </div>
  )
}

export default Contact