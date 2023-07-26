import React from "react";

const ForInObject = () => {
  const obj = { a: 30, b: 40, c: 50 };

  const callForIn=()=>{
    for(const property in obj){
      console.log(`${property}:${obj[property]}`)
    }
  }

  return (
    <div>
      <h1>for...in Object</h1>
      {
        callForIn()
      }
    </div>
  );
};

export default ForInObject;
