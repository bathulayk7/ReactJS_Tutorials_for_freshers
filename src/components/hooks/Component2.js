import React from "react";
import { useContext } from "react";
import { userContext } from "./UseContextBasics";

const Component2 = ({children }) => {
  const {user,react,test} = useContext(userContext);
  return (
    <>
      <div>{user}</div>
      <div>{react}</div>
      <div>{children}</div>
      <div>{test()}</div>
    </>
  );
};

export default Component2;
