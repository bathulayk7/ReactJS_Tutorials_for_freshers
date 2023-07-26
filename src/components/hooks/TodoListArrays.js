import React, { useState } from "react";

const TodoListArrays = () => {
  const [list, setList] = useState([]);
  const [item, setItem] = useState("");

  const handleInput = (event) => {
    setItem(event.target.value);
  };

  const handleBtn = () => {
    if (item !== "") {
      setList([...list, item]);
      setItem("");
    }
  };

  const handleDelete = (val) => {
    let newList=list.filter(ele=>ele!==val);
    setList(newList);
  };

  return (
    <>
      <div className="d-flex justify-content-center mt-3 ">
        <h1>Todo List App</h1>
      </div>
      <div className="row mt-3">
        <div className="col-4">
          <label htmlFor="item">Enter Item</label>
          <input
            type="text"
            name="item"
            id="item"
            className="form-control"
            placeholder="Item..."
            value={item}
            onChange={handleInput}
          />
        </div>
        <div className="col-2">
          <button
            className="form-control mt-4 btn btn-primary"
            onClick={handleBtn}
          >
            Add Item
          </button>
        </div>
      </div>
      <div className="mt-4">
        {list.length > 0 ? (
          list.map((itemVal, i) => {
            return (
              <React.Fragment key={i}>
                <div className="card mt-1">
                  <div className="card-body d-flex justify-content-between">
                    <h4 className="card-title">{itemVal}</h4>
                    <button
                      className="btn btn-outline-primary"
                      onClick={()=>handleDelete(itemVal)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </React.Fragment>
            );
          })
        ) : (
          <h1>Todo List is empty</h1>
        )}
      </div>
    </>
  );
};

export default TodoListArrays;
