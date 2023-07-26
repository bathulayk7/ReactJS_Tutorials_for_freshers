import React from "react";
import { useState } from "react";

const UseStateBoolean = () => {
  const [boolVal, setBoolVal] = useState(false);

  console.log(boolVal);

  const handleBtn = () => {
    setBoolVal(!boolVal);
  };

  return (
    <>
      <div className="row mt-5">
        <div className="col-4">
          <button className="form-control  btn btn-primary" onClick={handleBtn}>
            Toggle
          </button>
        </div>
      </div>
      <h1>{boolVal ? "BoolVal is TRUE now." : "BoolVal is FALSE now"}</h1>
    </>
  );
};

export default UseStateBoolean;
