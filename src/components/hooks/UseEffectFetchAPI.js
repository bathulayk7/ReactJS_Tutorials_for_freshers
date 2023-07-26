import React, { useEffect, useState } from "react";

const UseEffectFetchAPI = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchApiData();
  }, []);

  const fetchApiData = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((res) =>{
        let newData=res.filter(obj=>obj.id<=10)
        setData(newData)
      } )
      .catch((err) => console.log(err));
  };
  return <>
  <table className="table table-bordered border-primary mt-5 table-hover">
    <thead>
      <tr>
        <th>ID</th>
        <th>TITLE</th>
      </tr>
    </thead>
    <tbody>
      {
        data.length>0 && data.map((info)=>{
          return <React.Fragment key={info.id}>
            <tr>
              <td>{info.id}</td>
              <td>{info.title}</td>
            </tr>
          </React.Fragment>
        })
      }
    </tbody>
  </table>
  </>;
};

export default UseEffectFetchAPI;
