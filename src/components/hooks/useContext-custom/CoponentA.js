import React from 'react'
import { useViewContext } from './Provider';
import ComponentB from './ComponentB';

const CoponentA = () => {
  const {add}=useViewContext();
  return (
    <>
    <div>{add()}</div>
    <ComponentB />
    </>
  )
}

export default CoponentA