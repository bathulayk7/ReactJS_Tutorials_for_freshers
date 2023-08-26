import React, { useEffect, useState } from "react";
import axios from "axios";

const CancelApiCall = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <>
      <button
        className="form-control"
        onClick={() => setToggle((prev) => !prev)}
      >
        Toggle
      </button>
      {toggle && <List />}
    </>
  );
};
export default CancelApiCall;

const List = () => {
  const [todoData, setTodoData] = useState([]);

  useEffect(() => {
    const todoRequest = axios.CancelToken.source();
    axios
      .get("https://jsonplaceholder.typicode.com/todos", {
        cancelToken: todoRequest.token,
      })
      .then((res) => {
        setTodoData(res.data);
      })
      .catch((err) => console.log(err));
    return () => {
      console.log("cancel request API");
      todoRequest.cancel();
    };
  }, []);

  return (
    <div>
      {todoData.map((list) => {
        return <div key={list.id}>{list.title}</div>;
      })}
    </div>
  );
};

