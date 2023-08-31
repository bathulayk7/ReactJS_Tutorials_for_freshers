import React from "react";

const TestingCode = () => {
 
  let str="pencilandpen";
let arr=str.split("")
let pure=[...Array.from(new Set(str))]

let counter=(ch)=>{
  let count=0;
  arr.forEach((item)=>{
    if(item===ch){
      count++
    }
  })
  return count;
}

let res=""

for(let i=0;i<pure.lenth;i++){
  console.log("runnuiing")
    res+=pure[i]+counter(pure[i])
}

console.log(res);

  return (
    <>
      <div>hello</div>
    </>
  );
};

export default TestingCode;
