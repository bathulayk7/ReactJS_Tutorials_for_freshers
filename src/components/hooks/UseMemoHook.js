import React from "react";
import { useMemo } from "react";
import { useState } from "react";

const UseMemoHook = () => {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  const handleCounterOne = () => {
    setCountOne(countOne + 1);
  };
  const handleCounterTwo = () => {
    setCountTwo(countTwo + 1);
  };

const even=useMemo(()=>{
console.log("calling")
  let i=0;
  while(i<2000000000)i++;
  
  return countOne%2===0;
},[countOne])

  return (
    <>
      <div className="row mt-5">
        <div className="col-4">
          <h2>{countOne}</h2>
          <button className="form-control" onClick={handleCounterOne}>
            Counter-One
          </button>
          <span>{even?"Even":"Odd"}</span>
        </div>
        <div className="col-4">
          <h2>{countTwo}</h2>
          <button className="form-control" onClick={handleCounterTwo}>
            Counter-Two
          </button>
        </div>
      </div>
    </>
  );
};

export default UseMemoHook;
