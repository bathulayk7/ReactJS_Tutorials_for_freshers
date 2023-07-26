import React from "react";
import { useState } from "react";

const UseStateArrayOfString = () => {
  const [strArr, setStrArr] = useState(["Hello", "How", "are", "you"]);
  const [strVal, setStrVal] = useState("");

  const handleInput = (event) => {
    setStrVal(event.target.value);
  };
  const handleAddBtn = () => {
    setStrArr([...strArr, strVal]);
    setStrVal("");
  };
  return (
    <>
      <div className="row mt-5">
        <div className="col-4">
          <input
            type="text"
            className="form-control"
            value={strVal}
            onChange={handleInput}
          />
        </div>
        <div className="col-2">
          <button
            className="form-control btn btn-primary"
            onClick={handleAddBtn}
          >
            Add
          </button>
        </div>
      </div>
      {strArr && strArr.map((ele, i) => <h1 key={i}>{ele}</h1>)}
    </>
  );
};

export default UseStateArrayOfString;
