import React from "react";

const ReduceWithArray = () => {
    const arr=[4,6,8,50,2,5];
    
    let reduced1=arr.reduce((total,val)=>total+val,0)

    let reduced2=arr.reduce((a,b)=>a<b?a:b)


  return (
    <div>
      <h1>ReduceWithArray</h1>
      <h2>{reduced1}</h2>
      <h2>{reduced2}</h2>

    </div>
  );
};

export default ReduceWithArray;
