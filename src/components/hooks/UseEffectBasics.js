import React, { useEffect, useState } from "react";

const UseEffectBasics = () => {
  const [count, setCount] = useState(0);
  const [str, setStr] = useState("Bathula");

  useEffect(() => {
    console.log("mount");
    return () => console.log("unmount");
  },[count,str]);

  return (
    <>
      <div>
        <h2>{str}</h2>
        <button onClick={() => setStr("First")}>First</button>
        <button onClick={() => setStr("Two")}>Two</button>
        <button onClick={() => setStr("Three")}>Three</button>
      </div>
      <div>
        <h2>{count}</h2>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    </>
  );
};

export default UseEffectBasics;
