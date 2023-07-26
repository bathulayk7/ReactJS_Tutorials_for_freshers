import React from "react";



const SortWithArrayOfObjects = () => {

  const arrOfObj = [
    { id: 1, carName: "ABC", carNumber: "ABC123",year:"2015" },
    { id: 2, carName: "XYZ", carNumber: "XYZ789",year:"2022" },
    { id: 3, carName: "KLM", carNumber: "KLM456",year:"2013" },
  ];

  let sortedArr = arrOfObj.sort((c1, c2) => (c1.year > c2.year ? -1 : 1));

  return (
    <div>
      <h1>SortWithArrayOfObjects</h1>
      {sortedArr &&
        sortedArr.map((obj) => (
          <div>
            <h2>
              CarName:{obj.carName}, CarNumber:{obj.carNumber}, Year:{obj.year}
            </h2>
          </div>
        ))}
    </div>
  );
};

export default SortWithArrayOfObjects;
