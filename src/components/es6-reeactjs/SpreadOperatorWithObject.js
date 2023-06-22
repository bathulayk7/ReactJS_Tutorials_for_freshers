import React from "react";

const SpreadOperatorWithObject = () => {
  const obj={firstName:"bathula",lastName:"sai"}
  console.log("obj",obj)


  const objFun=(param)=>{
    let newObj={...param,age:"25"}
    console.log("newObj",newObj)
  }
  return (
    <div>
      <h1>SpreadOperatorWithObject</h1>
      {
        objFun(obj)
      }
    </div>
  );
};

export default SpreadOperatorWithObject;
