import React from "react";

const MergeWithArray = () => {
  const arr1 = [5, 3, 8, 6, 2, 9];
  const arr2 = [50, 30, 80, 60, 20, 90];

  // const arr3=arr1.concat(arr2);
  const arr3 = [...arr1, ...arr2];

  console.log(arr3);

  return (
    <div>
      <h1>MergeWithArray</h1>
      {arr3 &&
        arr3.map((ele, i) => (
          <h1 key={i} style={{ display: "inline-block", padding: 5 }}>
            {ele}
          </h1>
        ))}
    </div>
  );
};

export default MergeWithArray;
