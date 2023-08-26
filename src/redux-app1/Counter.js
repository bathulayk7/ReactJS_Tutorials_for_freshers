import React from "react";
import { connect } from "react-redux";
import { decrAction, incrAction, resetAction } from "./Action";

const Counter = ({ count, handleDecement, handleIncement,handleReset }) => {
  return (
    <>
      <div>
        <h1>Counter:{count}</h1>
      </div>
      <div className="row">
        <div className="col-4">
          <button className="form-control" onClick={handleDecement}>
            Decrement
          </button>
        </div>
        <div className="col-4">
          <button className="form-control" onClick={handleIncement}>
            Increment
          </button>
        </div>
        <div className="col-4">
          <button className="form-control" onClick={handleReset}>Reset</button>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return { count: state.counterReducer.count };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleDecement: () => dispatch(decrAction()),
    handleIncement: () => dispatch(incrAction()),
    handleReset: () => dispatch(resetAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
