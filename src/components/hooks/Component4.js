import React from 'react'
import { useContext } from 'react'
import { userContext } from './UseContextDestructuring'

const Component4 = ({children}) => {
    const {user,task,test}=useContext(userContext);
  return (<>
    <div>{user}</div>
    <div>{task}</div>
    <div>{test()}</div>
    <div>{children}</div>
  </>
  )
}

export default Component4