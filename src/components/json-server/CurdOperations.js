import React, { useEffect, useState } from "react";
import axios from "axios";

//install:> npm i env-cmd
//"build": "CI= react-scripts build",
//npm run server
// package.json--- "server": "json-server --port 3001 --watch db.json --host 127.0.0.1",
const client = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});


console.log("yk",process.env.REACT_APP_API_BASE_URL)

const CurdOperations = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    getInfo();
  }, []);

  const getInfo = () => {
    client.get("/serverData").then((res) => setInfo(res.data));
  };

  const handlePost = () => {
    client
      .post("/serverData", {
        title: "Bathula next.js",
      })
      .then((res) => setInfo([...info, res.data]));
  };

  const handlePut = () => {
    client
      .put("/serverData/2", {
        title: "Bathula Sai Charan",
      })
      .then((res) => {
        let newInfo = info.filter((obj) => obj.id !== 2);
        setInfo([...newInfo, res.data]);
      });
  };

  const handleDel = () => {
    client.delete("/serverData/3").then((res) => {
      getInfo();
    });
  };

  console.log("info", info);
  return (
    <>
      <div>
        <h1>CurdOperations</h1>
        <button onClick={handlePost}>Create/Post</button>
        <button onClick={handlePut}>Update/Put</button>
        <button onClick={handleDel}>Update/Del</button>
      </div>
      <div>
        {info &&
          info.map((obj) => {
            return (
              <div key={obj.id}>
                <h4>{obj.title}</h4>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default CurdOperations;
