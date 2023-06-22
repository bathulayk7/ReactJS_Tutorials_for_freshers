import React from "react";

const ChildrenComponent = (props) => {
  return (
    <div>
      <h1>ChildrenComponent</h1>
      {props.msg}
      {
        props.children
      }
    </div>
  );
};

export default ChildrenComponent;
