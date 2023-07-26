import React, { useEffect, useState } from "react";
import axios from "axios";

const CurdOperations = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    getInfo();
  }, []);

  const getInfo = () => {
    axios
      .get("http://127.0.0.1:3001/serverData")
      .then((res) => setInfo(res.data));
  };

  const handlePost = () => {
    axios
      .post("http://127.0.0.1:3001/serverData", {
        title: "Bathula java",
      })
      .then((res) => setInfo([...info,res.data]));
  };

  const handlePut=()=>{
    axios
    .put("http://127.0.0.1:3001/serverData/2", {
      title: "Bathula Sai Charan",
    })
    .then((res) =>{
      let newInfo=info.filter(obj=>obj.id!==2)
      setInfo([...newInfo,res.data])
    } );
  }

  const handleDel=()=>{
    axios
    .delete("http://127.0.0.1:3001/serverData/3")
    .then((res) =>{
     getInfo();
    } );
  }

  console.log(info);
  return (
    <div>
      <h1>CurdOperations</h1>
      <button onClick={handlePost}>Create/Post</button>
      <button onClick={handlePut}>Update/Put</button>
      <button onClick={handleDel}>Update/Del</button>
    </div>
  );
};

export default CurdOperations;
