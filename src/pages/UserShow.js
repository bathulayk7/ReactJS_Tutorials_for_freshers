import React from "react";
import { Link, useParams } from "react-router-dom";
import { vehInfo } from "./VehicalData";

const UserShow = () => {
  const param = useParams();
console.log(param)
  const oneVeh = vehInfo.filter((item) => item.id === param.userId);
  console.log(oneVeh);
  return (
    <div className="row m-5">
    {oneVeh &&
      oneVeh.map((item) => {
        return (
          <div
            key={item.id}
            className="col-4 m-auto"
          >
            <div className="card  bg-primary text-white">
              <div className="card-body">
                <h4 className="card-title ">Title:{item.title}</h4>
                <h5 className="card-text">Wheels:{item.wheels}</h5>
              </div>
            </div>
          </div>
        );
      })}
  </div>
  );
};

export default UserShow;
