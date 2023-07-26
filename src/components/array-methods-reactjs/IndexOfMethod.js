import React from "react";

const IndexOfMethod = () => {
  const arr = ["trrg", "pgg", "dfg", "rtg"];
  const arrOfObj=[
    {id:1,book:"js",price:"45"},
    {id:2,book:"rjs",price:"68"},
    {id:3,book:"CSS",price:"34"}
  ]

  let arrIndex = arr.indexOf("dfg");
  let arrObjindx=arrOfObj.map(obj=>obj.book).indexOf("rjs")

  return (
    <div>
      <h1>IndexOfMethod</h1>
      <h2>{arrIndex}</h2>
      <h2>{arrObjindx}</h2>
    </div>
  );
};

export default IndexOfMethod;
