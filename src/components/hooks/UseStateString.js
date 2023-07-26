import React from "react";
import { useState } from "react";

const UseStateString = () => {
  const [strVal, setStrVal] = useState("");

  const handleInput=(event)=>{
    setStrVal(event.target.value)
  }

  return (
    <>
      <div className="row mt-5" >
      <div className="col-4" >
        <input type="text" maxLength="10" className="form-control" onChange={handleInput} />
      </div>
      </div>
      <h1>{strVal}</h1>
    </>
  );
};

export default UseStateString;
