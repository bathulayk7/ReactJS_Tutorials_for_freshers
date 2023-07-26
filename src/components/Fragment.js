import React from "react";
import Column from "../components/Column";

const Fragment = () => {
    const arrOfObj = [
        { id: 1, name: "abc", age: "30" },
        { id: 2, name: "klm", age: "25" },
        { id: 3, name: "xyz", age: "31" },
      ];

  return (
    <>
      <h1>Fragment</h1>
      <h3>It is fragment</h3>
      <table border="1" >
        <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <Column/>
            </tr>
        </tbody>
      </table>
      {
        arrOfObj && arrOfObj.map(obj=>{
            return(
                <React.Fragment key={obj.id} >
                    <h2>{obj.name}</h2>
                    <h2>{obj.age}</h2>
                </React.Fragment>
            )
        })
      }
    </>
  );
};

export default Fragment;
