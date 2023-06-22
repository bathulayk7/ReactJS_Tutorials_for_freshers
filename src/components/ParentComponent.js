import React from "react";
import ChildrenComponent from "./ChildrenComponent";
import SimpleComponent from "./SimpleComponent";

const ParentComponent = () => {
   
    const callFun=()=>{
        return <p>This is a parent function</p>
    }
    
  return (
    <div>
      <h1>ParentComponent</h1>
      <ChildrenComponent msg="Hi, Welcome as props" >
        <p>This is from Parent</p>
        {
            callFun()
        }
        <SimpleComponent/>
      </ChildrenComponent>
    </div>
  );
};

export default ParentComponent;
