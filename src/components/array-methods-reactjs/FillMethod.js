import React from 'react'

const FillMethod = () => {
  let arr=["abc","app","xyz","rss"];

  let arrOfObj=[
    {id:1,book:"js",price:"45"},
    {id:2,book:"rjs",price:"68"},
    {id:3,book:"CSS",price:"34"}
  ]

  let fillArr=arr.fill("root",-2,-1)
  console.log("fillArr=",fillArr)

  let fillArrObj=arrOfObj.fill({id:4,book:"JSS",price:"49"},-2,-1)
  console.log("fillArrObj=",fillArrObj)

  return (
    <div>FillMethod</div>
  )
}

export default FillMethod