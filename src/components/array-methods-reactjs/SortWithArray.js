import React from "react";

const SortWithArray = () => {
  // const arr = [4, 58, 2, 64, 7, 8, 6,2];
  const arr=["sd","ert","trty","asd","fgjk","ert"]
  let sortArr = arr.sort((a, b) => (a > b ? 1 : -1));
  let newArr=[...new Set(sortArr)]
  return (
    <div>
      <h1>SortWithArray</h1>
      {newArr &&
        newArr.map((ele, i) => (
          <div>
            <h1>{ele}</h1>
          </div>
        ))}
    </div>
  );
};

export default SortWithArray;
