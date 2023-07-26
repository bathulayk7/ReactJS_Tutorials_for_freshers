import React from "react";

const PushMethod = () => {
  let arr = ["ab", "cd", "ef", "gh"];
  let arrOfObj = [
    { id: 1, book: "js", price: "45" },
    { id: 2, book: "rjs", price: "68" },
    { id: 3, book: "CSS", price: "34" },
  ];
  const obj1 = { id: 4, book: "java", price: "45" };
  const obj2 = { id: 5, book: "html", price: "49" };

  // use push() method in react js
  arr.push("ij");
  console.log("arr", arr);

  arrOfObj.push(obj1);
  console.log("arrOfObj", arrOfObj);

  // use spread operator method in react js
  arr=[...arr,"kl"]
  console.log("arr", arr);

  arrOfObj=[...arrOfObj,obj2]
  console.log("arrOfObj", arrOfObj);

  return <div>PushMethod</div>;
};

export default PushMethod;
