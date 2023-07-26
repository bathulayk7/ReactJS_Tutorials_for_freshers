import React from "react";
import { createContext } from "react";
import Component3 from "./Component3";

export const userContext=createContext();

const UseContextDestructuring = () => {
  let user = "Bathula";
  let task = "React js";

  const test = () => {
    return <h1>This testing function which is in the parent.</h1>;
  };

  return <userContext.Provider value={{user,task,test}}>
    <Component3/>
  </userContext.Provider>;
};

export default UseContextDestructuring;
