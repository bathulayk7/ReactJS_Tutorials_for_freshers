import React from "react";
import { useReducer } from "react";

const initialState = {
  counter1: 0,
  counter2: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "incrementCounter1":
      return { ...state, counter1: state.counter1 + action.payload };
    case "decrementCounter1":
      return { ...state, counter1: state.counter1 - action.payload };
    case "incrementCounter2":
      return { ...state, counter2: state.counter2 + action.payload };
    case "decrementcounter2":
      return { ...state, counter2: state.counter2 - action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const UseReducerCounters = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div className="row mt-5">
        <div className="col-4">
          <button
            className="form-control"
            onClick={() => dispatch({ type: "incrementCounter1", payload: 1 })}
          >
            Increment-Counter1
          </button>
        </div>
        <div className="col-4">
          <button className="form-control"
          onClick={() => dispatch({ type: "decrementCounter1", payload: 1 })}
          >Decrement-Counter1</button>
        </div>
        <div className="col-4">
          <div className="card">
            <div className="card-title">
              Counter1: {count.counter1}
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-4">
          <button className="form-control"
          onClick={() => dispatch({ type: "incrementCounter2", payload: 1 })}
          
          >Increment-Counter2</button>
        </div>
        <div className="col-4">
          <button className="form-control"
          onClick={() => dispatch({ type: "decrementcounter2", payload: 1 })}
          
          >Decrement-Counter2</button>
        </div>
        <div className="col-4">
          <div className="card">
            <div className="card-title">
            Counter2: {count.counter2}
            </div>
          </div>
        </div>
        <div className="col-4 m-auto mt-4">
          <button className="form-control"
          onClick={() => dispatch({ type: "reset"})}
          
          > Reset</button>
        </div>
      </div>
    </>
  );
};

export default UseReducerCounters;
