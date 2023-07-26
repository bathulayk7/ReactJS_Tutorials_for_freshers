import React from "react";

const SliceMethod = () => {
  const arr = ["ab", "cd", "ef", "gh", "ij", "kl"];

  const arrOfObj = [
    { id: 1, book: "js", price: "45" },
    { id: 2, book: "rjs", price: "68" },
    { id: 3, book: "CSS", price: "34" },
  ];

  let arrSlice = arr.slice(1, 5);
  console.log("arrSlice=", arrSlice);

  let arrrOfObjSlice = arrOfObj.slice(1,3);
  console.log("arrrOfObjSlice=", arrrOfObjSlice);

  return (
    <div>
      <h1>SliceMethod</h1>
      {arrSlice && arrSlice.map((ele, i) => <h2 key={i}>{ele}</h2>)}
      {arrrOfObjSlice &&
        arrrOfObjSlice.map((obj) => (
          <h2 key={obj.id}>
            Id:{obj.id}, Book:{obj.book}, Price:{obj.price}
          </h2>
        ))}
    </div>
  );
};

export default SliceMethod;
