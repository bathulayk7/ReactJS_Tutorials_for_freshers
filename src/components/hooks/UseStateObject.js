import React from "react";
import { useState } from "react";

const useStateObject = () => {
  const [objVal, setObjVal] = useState({ country: "", capital: "" });
  const [showObj, setShowObj] = useState(null);

  const handleInput = (e) => {
    let newObjVal = { ...objVal, [e.target.name]: e.target.value };
    setObjVal(newObjVal);
  };

  const handleBtn = () => {
    if (objVal.country !== "" && objVal.capital !== "") {
      setShowObj(objVal);
      setObjVal({ country: "", capital: "" });
    }
  };

  return (
    <>
      <div className="row mt-5">
        <div className="col-3">
          <label htmlFor="country">Country</label>
          <input
            type="text"
            name="country"
            id="country"
            value={objVal.country}
            className="form-control"
            onChange={handleInput}
          />
        </div>
        <div className="col-3">
        <label htmlFor="capital">Capital</label>
          <input
            type="text"
            name="capital"
            id="capital"
            value={objVal.capital}
            className="form-control"
            onChange={handleInput}
          />
        </div>
        <div className="col-2 mt-4">
          <button className="form-control" onClick={handleBtn}>
            Add
          </button>
        </div>
      </div>
      {showObj !== null && (
        <>
          <h1>Country:{showObj.country}</h1>
          <h1>Capital:{showObj.capital}</h1>
        </>
      )}
    </>
  );
};

export default useStateObject;
