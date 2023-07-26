import Count from './Count'
import Buttons from './Buttons'
import React, { useState } from 'react'
import { useCallback } from 'react';

const UseCallBack = () => {
  const [age,setAge]=useState(20);
  const [salary,setSalary]=useState(30000);

const handleAge=useCallback(()=>{
  setAge(age+1)
},[age])

const handleSalary=useCallback(()=>{
  setSalary(salary+1)
},[salary])

  return (
    <>
      <Count text="Age" count={age} />
      <Buttons handleClick={handleAge}>Increment-Age</Buttons>

      <Count text="Salary" count={salary} />
      <Buttons handleClick={handleSalary}>Increment-Salary</Buttons>

    </>
  )
}

export default UseCallBack