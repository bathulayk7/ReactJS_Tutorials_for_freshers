import React, { useState } from "react";

const UseStateArrayOfObjects = () => {
  const arrOfObj = useState([
    { id: 1, fname: "Abc", age: "26" },
    { id: 2, fname: "Xyz", age: "36" },
    { id: 3, fname: "Klm", age: "46" },
  ])[0];
  return (
    <div>
      {arrOfObj &&
        arrOfObj.map((obj) => (
          <div key={obj.id}>
            <h1>
              First Name: {obj.fname}, Age: {obj.age}
            </h1>
          </div>
        ))}
    </div>
  );
};

export default UseStateArrayOfObjects;
