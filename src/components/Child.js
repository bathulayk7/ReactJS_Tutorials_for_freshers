import React from 'react'

const Child = ({method}) => {

  const childFun=()=>{
    method("Child value is now")
  }

  return (
    <div>
      <button onClick={childFun} >Change</button>
    </div>
  )
}

export default Child