import React from 'react'
import { useViewContext } from './Provider';

const ComponentB = () => {
    const {add}=useViewContext();
  return (
    <div>{add()}</div>
  )
}

export default ComponentB