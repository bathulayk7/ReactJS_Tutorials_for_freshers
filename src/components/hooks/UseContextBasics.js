import React from 'react'
import Component1  from './Component1'
import { createContext } from 'react'

export const userContext=createContext();

const UseContextBasics = () => {

  let user="Bathula";
  let react="React js";
const test=()=>{
    return <h1>Testing functions</h1>
}

  return (
    <userContext.Provider value={{user,react,test}}>
    <Component1  />
    </userContext.Provider>
  )
}

export default UseContextBasics