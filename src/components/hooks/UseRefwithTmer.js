import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

const UseRefwithTmer = () => {
  const [timer, setTimer] = useState(0);
  const intervalTimer = useRef(null);

  useEffect(() => {
    intervalTimer.current = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(intervalTimer.current);
    };
  }, []);

  return (
    <>
      <div className="row mt-5">
        <div className="col-4">
          <h2>{timer}</h2>
          <button
          className="form-control"
            onClick={() => {
              clearInterval(intervalTimer.current);
            }}
          >
            stop Timer
          </button>
        </div>
      </div>
    </>
  );
};

export default UseRefwithTmer;
