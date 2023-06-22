import React from "react";
import JsxChild from "./JsxChild";

const Jsx = () => {
  let b = true;
  const add = () => {
    let a = 4 + 5;
    return <h1>This is a js function {a}</h1>;
  };

  return (
    <div>
      <h1>This is HTML CODE</h1>
      {b && add()}
      {b && <JsxChild />}
    </div>
  );
};

export default Jsx;
