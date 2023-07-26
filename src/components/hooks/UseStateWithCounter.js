import React, { useState } from 'react'

const useStatewithCounter = () => {
  const [counter,setCounter]=useState(10);

  const handleDec=()=>{
    setCounter(counter-1);
  }
  const handleReset=()=>{
    setCounter(0);
  }

  const handleInc=()=>{
    setCounter(counter+1);
  }
  
  return (
    <>
    <div className="row mt-5" >
      <div className='col-4' >
        <button className='form-control btn btn-primary' onClick={handleDec} >Decrement</button>
      </div>
      <div className='col-4' >
        <button className='form-control btn btn-primary' onClick={handleReset}>Reset</button>
      </div>
      <div className='col-4' >
        <button className='form-control btn btn-primary' onClick={handleInc}>Increment</button>
      </div>
    </div>
    <h1>{counter}</h1>
    </>
  )
}

export default useStatewithCounter