import React from "react";
import { useEffect } from "react";
import { useRef } from "react";

const UseRefWithInput = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <div className="row mt-5 ">
        <div className="col-4">
          <label htmlFor="ref">Name</label>
          <input ref={inputRef} type="text" 
          name="ref" id="ref" className="form-control" />
        </div>
      </div>
    </>
  );
};

export default UseRefWithInput;
