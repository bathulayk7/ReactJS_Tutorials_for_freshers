import React from 'react'

const ReadList = ({item,handleEdit}) => {
  return (
    <div>
        <h2 onClick={(e)=>handleEdit(e,item)} >{item}</h2>
    </div>
  )
}

export default ReadList