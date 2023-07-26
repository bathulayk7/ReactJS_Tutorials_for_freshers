import React from "react";

const ReverseMethod = () => {
  const arr = [56, 34, 23];
  const arrOfObj = [
    { id: 1, name: "ab" },
    { id: 2, name: "cd" },
    { id: 3, name: "ef" },
  ];

  let arrReverse = arr.reverse();
  console.log("arrReverse", arrReverse);

  let arrOfObjReverse = [...arrOfObj].reverse();
  console.log("arrOfObjReverse", arrOfObjReverse);

  return (
    <div>
      <h1>ReverseMethod</h1>
      {arrReverse && arrReverse.map((ele, i) => <h2 key={i}>{ele}</h2>)}
      {arrOfObjReverse &&
        arrOfObjReverse.map((obj) => (
          <h2 key={obj.id}>
            Id:{obj.id},Name:{obj.name}
          </h2>
        ))}
    </div>
  );
};

export default ReverseMethod;
