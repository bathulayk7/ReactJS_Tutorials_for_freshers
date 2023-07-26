import React from "react";
import useCounter from "./useCounter";

const CounterOne = () => {
  const [count, increment, decrement, reset] = useCounter();

  return (
    <>
      <div className="mt-5">
        <h1>Counter One App</h1>
        <h3>{count}</h3>
      </div>
      <div className="row">
        <div className="col-3">
          <button className="form-control" onClick={increment}>
            Increment
          </button>
        </div>
        <div className="col-3">
          <button className="form-control" onClick={decrement}>
            Decrement
          </button>
        </div>
        <div className="col-3">
          <button className="form-control" onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default CounterOne;
