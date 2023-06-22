import React, { useState } from 'react'
import Child from './Child';

const Parent = () => {
const [val,setVal]=useState("this is a Parent");

const method=(v)=>{
  setVal(v)
}

  return (
    <div>
      <h1>{val}</h1>
      <Child method={method} />
    </div>
  )
}

export default Parent