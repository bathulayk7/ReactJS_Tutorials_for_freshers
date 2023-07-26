import React from 'react'

const Buttons = ({handleClick,children}) => {
  console.log(`Rendering ${children}`)
  return (
    <div>
      <button onClick={handleClick} >{children}</button>
    </div>
  )
}

export default React.memo(Buttons)