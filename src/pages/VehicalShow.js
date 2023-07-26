import React from "react";
import { Link, useParams } from "react-router-dom";
import { vehInfo } from "./VehicalData";

const VehicalShow = () => {
  const { vehId } = useParams();
  const singleVeh = vehInfo && vehInfo.filter((veh) => veh.id === vehId);

  return (
    <div>
      <nav className="row mt-5 ">
        {singleVeh && singleVeh.length > 0
          ? singleVeh.map((items) => {
              const { id, title, wheels, length } = items;
              return (
                <div key={id} className="col-4 text-decoration-none m-auto">
                  <article className="card bg-primary text-white">
                    <h2 className="card-title">Title:{title}</h2>
                    <h3>Wheels:{wheels}</h3>
                    <h3>Length:{length}</h3>
                    <Link to="/vehical" className="card-title">Go back to Vehical list</Link>
                  </article>
                </div>
              );
            })
          : ""}
      </nav>
    </div>
  );
};

export default VehicalShow;
