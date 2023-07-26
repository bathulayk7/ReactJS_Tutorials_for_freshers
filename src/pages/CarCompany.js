import React from "react";
import { useSearchParams } from "react-router-dom";

const carData = [
  { id: 1, name: "Gabvine", make: "Suzuki" },
  { id: 2, name: "Lazz", make: "Ford" },
  { id: 3, name: "Rhybox", make: "Mitsubishi" },
  { id: 4, name: "Mynte", make: "GMC" },
  { id: 5, name: "Yambee", make: "Volvo" },
];

const CarCompany = () => {
  const [search, setSearch] = useSearchParams();
  const srch = search.get("name");

  const handleInput=(event)=>{
    setSearch({name:event.target.value});
  }

  const handleSearch=()=>{
    return carData && carData.length>0 ?
      carData.filter(item=>item.name.toLowerCase().includes(srch && srch.toLowerCase()))
      .map(dt=>{
        return <div key={dt.id} className="card" >
          <h6 className="card-body">{dt.name}</h6>
        </div>
      })
    :""
  }

  return (
    <>
      <div className="row">
        <div className="col-4">
          <label htmlFor="search">Search</label>
          <input
            type="text"
            name="search"
            id="search"
            className="form-control"
            value={search.name}
            onChange={handleInput}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          {
            handleSearch()
          }
        </div>
      </div>
    </>
  );
};

export default CarCompany;
