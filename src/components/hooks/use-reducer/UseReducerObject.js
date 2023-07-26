import React, { useReducer } from "react";

const initialState = {
  counter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { counter: state.counter + action.payload };
    case "decrement":
      return { counter: state.counter - action.payload };
      case "reset":
      return initialState
    default:
      return state;
  }
};

const UseReducerObject = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <div className="row mt-5">
        <div className="col-4">
          <button
            className="form-control"
            onClick={() => dispatch({ type: "increment", payload: 1 })}
          >
            Increment
          </button>
        </div>
        <div className="col-4">
          <button
            className="form-control"
            onClick={() => dispatch({ type: "decrement", payload: 1 })}
          >
            Decrement
          </button>
        </div>
        <div className="col-4">
          <button
            className="form-control"
            onClick={() => dispatch({ type: "reset" })}
          >
            Reset
          </button>
        </div>
        <div className="col-4 m-auto mt-5 ">
          <h1>{count.counter}</h1>
        </div>
      </div>
    </>
  );
};

export default UseReducerObject;
