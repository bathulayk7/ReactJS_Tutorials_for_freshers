import React, { useState } from "react";
import { connect } from "react-redux";
import { userNameAction } from "./Action";

const UserName = ({ name, handleSubmint }) => {
  const [userName, setUserName] = useState("");
  return (
    <>
      <div>
        <h1>UserName:{name}</h1>
      </div>
      <div className="row">
        <div className="col-4">
          <label htmlFor="userName">UseName</label>
          <input
            type="text"
            className="form-control"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="col-4 mt-4">
          <button
            className="form-control"
            onClick={() => {
              if (!userName) return;
              handleSubmint(userName);
              setUserName("");
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return { name: state.userName.name };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmint: (userName) => {
      dispatch(userNameAction(userName));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserName);
