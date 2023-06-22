import React from 'react'

const emp={ename:"rajesh",age:25,gender:"male"}

const DestructuringWithObj = () => {
  const {ename:name,age:a,gender}=emp;
  return (
    <div>
      <h1>DestructuringWithObj</h1>
      <h1>{name}</h1>
      <h1>{a}</h1>
      <h1>{gender}</h1>

    </div>
  )
}

export default DestructuringWithObj