import React, { useState } from "react";

const data = [
  { id: 1, fname: "Abc", lastName: "Efg" },
  { id: 2, fname: "Xyz", lastName: "Mnp" },
];

const UseStateArrObjDynamic = () => {
  const [arrOfObj, setArrOfObj] = useState(data);
  const [inputObj, setInputObj] = useState({ id: "", fname: "", lastName: "" });

  const handleInput = (event) => {
    let newData = {
      ...inputObj,
      id: arrOfObj.length + 1,
      [event.target.name]: event.target.value,
    };
    setInputObj(newData);
  };
  // console.log(inputObj)
  const handleBtn = () => {
    if (inputObj.fname !== "" && inputObj.lastName !== "") {
      setArrOfObj([...arrOfObj, inputObj]);
      setInputObj({ id: "", fname: "", lastName: "" });
    }
  };
  return (
    <>
      <div className="row mt-5">
        <div className="col-3">
          <label htmlFor="fname" className="label-control">
            First Name
          </label>
          <input
            type="text"
            name="fname"
            id="fname"
            className="form-control"
            value={inputObj.fname}
            onChange={handleInput}
          />
        </div>
        <div className="col-3">
          <label htmlFor="lastName" className="label-control">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            className="form-control"
            value={inputObj.lastName}
            onChange={handleInput}
          />
        </div>
        <div className="col-2 mt-4">
          <button className="form-control btn btn-primary" onClick={handleBtn}>
            Add
          </button>
        </div>
      </div>

      <div className="row mt-4">
        {arrOfObj &&
          arrOfObj.map((info) => {
            return (
              <React.Fragment key={info.id}>
                <div className="card mt-1">
                  <div className="card-body">
                    <h4>
                      First Name: {info.fname}, Last Name: {info.lastName}
                    </h4>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
      </div>
    </>
  );
};

export default UseStateArrObjDynamic;
