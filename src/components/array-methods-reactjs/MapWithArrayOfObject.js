import React from "react";

const MapWithArrayOfObject = () => {

  const arrOfObj=[
    {id:1,carName:"ABC",carNumber:"ABC123"},
    {id:2,carName:"XYZ",carNumber:"XYZ789"},
    {id:3,carName:"KLM",carNumber:"KLM456"},
  ]

  return (
    <div>
      <h1>MapWithArrayOfObject</h1>
      {
        arrOfObj && arrOfObj.map(obj=>{
          return <div key={obj.id} >
            <h3>Car Name:{obj.carName}, Car Number:{obj.carNumber}</h3>
          </div>
        })
      }
    </div>
  );
};

export default MapWithArrayOfObject;
