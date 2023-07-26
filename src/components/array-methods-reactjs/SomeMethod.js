import React from 'react'

const SomeMethod = () => {
const arr=[45,33,77,22,90];
const arrOfObj = [
    { id: 1, carName: "ABC", carNumber: "ABC123",year:"2015" },
    { id: 2, carName: "XYZ", carNumber: "XYZ789",year:"2022" },
    { id: 3, carName: "KLM", carNumber: "KLM456",year:"2013" },
  ];

let arrFlag=arr.some(ele=>ele<33);
console.log("arrFlag=",arrFlag)

let arrOfObjFlag=arrOfObj.some(obj=>obj.year>2020);
console.log("arrOfObjFlag=",arrOfObjFlag)


  return (
    <div>SomeMethod</div>
  )
}

export default SomeMethod