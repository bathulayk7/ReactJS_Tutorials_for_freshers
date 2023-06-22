import React from 'react'

const DefaultParameters = () => {
  
  const defaultCal=(a=10,b=5)=>{
   return <h1>a={a},b={b}</h1>
  }
  return (
    <div>
      <h1>DefaultParameters</h1>
      {
        defaultCal(50,20)
      }
      <br />
      {
        defaultCal(100)
      }
       <br />
      {
        defaultCal()
      }
    </div>
  )
}

export default DefaultParameters