import React from "react";

const MapWithArray = () => {
  const arrList = [11, 33, 77, 22, 88];
  return (
    <div>
      <h1>MapWithArray</h1>
      {arrList &&
        arrList.map((ele, index) => {
          return (
            <div key={index}>
              <h2>{ele}</h2>
            </div>
          );
        })}
    </div>
  );
};

export default MapWithArray;
