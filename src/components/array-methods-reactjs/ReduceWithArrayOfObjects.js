import React from "react";

const ReduceWithArrayOfObjects = () => {
const arr = [{ x: 10,ename:"ac" }, { x: 12, name:"hj" }, { x: 4, name:"klg" }];

let reduced1 = arr.reduce((a,obj)=>a+obj.x,0)

let reduced2 = arr.reduce((a,obj)=>({x:a.x+obj.x}))

let reduced3 = arr.reduce((total,{x})=>total+x,0)

  return (
    <div>
      <h1>ReduceWithArrayOfObjects</h1>
      <h2>{reduced1}</h2>
      <h2>{reduced2.x}</h2>
      <h2>{reduced3}</h2>
    </div>
  );
};

export default ReduceWithArrayOfObjects;
