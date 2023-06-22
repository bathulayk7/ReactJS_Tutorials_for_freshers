import React from "react";

const  arrObj=[
    {id:20,title:"car"},
    {id:26,title:"bus"},
    {id:30,title:"train"}
]


const DestructuringWithArrayOfObject = () => {
    const {id,title}=arrObj[0];
  return (
    <div>
      <h1>DestructuringWithArrayOfObject</h1>
       <h1>{id}</h1>
       <h1>{title}</h1>
    </div>
  );
};

export default DestructuringWithArrayOfObject;
