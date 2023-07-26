import React from 'react'

const UnshiftMethod = () => {
  let arr = ["ab", "cd", "xy", "az"];

    let arrOfObj = [
      { id: 1, book: "js", price: "45" },
      { id: 2, book: "rjs", price: "68" },
      { id: 3, book: "CSS", price: "34" },
      { id: 4, book: "java", price: "534" },
    ];

  let obj1=  { id: 5, book: "php", price: "500" }
  let obj2=  { id: 6, book: "math", price: "300" }

//using unshift() method
  arr.unshift("Hi")
  console.log("arr=",arr);

  arrOfObj.unshift(obj1);
  console.log("arrOfObj=",arrOfObj);

// using spread operator
arr=["Hello",...arr]
console.log("arr=",arr);

arrOfObj=[obj2,...arrOfObj]
console.log("arrOfObj=",arrOfObj)

  return (
    <div>UnshiftMethod</div>
  )
}

export default UnshiftMethod