import React from "react";
import { useState } from "react";

const UseStateBasics = () => {
  const [val, setVal] = useState("");
  const [show,setShow]=useState("");

  const handleInput = (event) => {
    setVal(event.target.value);
  };

  const handleBtn = () => {
    val !=="" && setShow(val);
    setVal("");
  };

  return (
    <>
      <div className="row mt-5">
        <div className="col-4">
          <input
            type="number"
            className="form-control"
            value={val}
            onChange={handleInput}
          />
        </div>
        <div className="col-2">
          <button className="form-control btn btn-primary "  onClick={handleBtn}>
            Show
          </button>
        </div>
        <h1>{show}</h1>
      </div>
    </>
  );
};

export default UseStateBasics;
