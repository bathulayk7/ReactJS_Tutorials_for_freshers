import React from "react";

const ObjectLiterals = () => {
  const getEmp = (ename, age, gender) => {
    let objEmp = {
      ename,
      age,
      gender,
    };
    return objEmp;
  };

  console.log(getEmp("Bathula", 25, "male"))


  return (
    <div>
      <h1>ObjectLiterals</h1>
      {/* {console.log(getEmp("Bathula", 25, "male"))} */}
    </div>
  );
};

export default ObjectLiterals;
