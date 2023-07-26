import React, { createContext } from "react";
import { useContext } from "react";

export const viewContext = createContext();

export const Provider = ({ children }) => {
  let add = () => {
    return <h1>{5 + 3}</h1>;
  };

  return (
    <viewContext.Provider value={{ add }}>{children}</viewContext.Provider>
  );
};

export const useViewContext=()=>{
  return useContext(viewContext)
}
