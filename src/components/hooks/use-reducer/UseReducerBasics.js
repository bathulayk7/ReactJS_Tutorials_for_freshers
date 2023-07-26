import React, { useReducer } from "react";

const initialState=0;

const reducer=(state,action)=>{
    switch(action.type){
        case "increment": return state+1;
        case "reset": return initialState;
        case "decrement": return state-1;
        default: return state;
    }
}

const UseReducerBasics = () => {
    const [count,dispatch]=useReducer(reducer,initialState)

    const inc=()=>{
        dispatch({type:"increment"})
    }

  return (
    <>
      <div className="row mt-5">
        <div className="col-4">
          <button className="form-control" onClick={inc} >Increment</button>
        </div>
        <div className="col-4">
          <button className="form-control" onClick={()=>dispatch({type:"reset"})}>Reset</button>
        </div>
        <div className="col-4">
          <button className="form-control" onClick={()=>dispatch({type:"decrement"})}>Decrement</button>
        </div>
        <div className="col d-flex justify-content-center mt-4 ">
          <h1> {count}</h1>
        </div>
      </div>
    </>
  );
};

export default UseReducerBasics;
