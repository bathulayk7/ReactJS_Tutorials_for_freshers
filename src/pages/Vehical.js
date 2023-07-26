import React from "react";
import { vehInfo } from "./VehicalData";
import { Link } from "react-router-dom";

const Vehical = () => {
  return (
    <div>
      <nav className="row mt-5 ">
        {vehInfo && vehInfo.length > 0
          ? vehInfo.map((items) => {
              const { id, title, wheels, length } = items;
              return (
                <Link
                  to={`/vehical/${id}`}
                  key={id}
                  className="col-4 text-decoration-none"
                >
                  <article className="card bg-primary text-white">
                    <h2 className="card-title">Title:{title}</h2>
                    <h3>Wheels:{wheels}</h3>
                    <h3>Length:{length}</h3>
                  </article>
                </Link>
              );
            })
          : ""}
      </nav>
    </div>
  );
};

export default Vehical;
