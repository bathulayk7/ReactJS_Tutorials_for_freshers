import React from "react";

const FilterWithArray = () => {
  const arr = [77, 45, 30, 90, 22, 100];

  let newArr = arr && arr.filter((ele) => ele !== 45 && ele!==22 );

  return (
    <div>
      <h1>FilterWithArray</h1>
      {newArr &&
        newArr.map((ele, i) => {
          return (
            <div key={i} >
              <h2>{ele}</h2>
            </div>
          );
        })}
    </div>
  );
};

export default FilterWithArray;
