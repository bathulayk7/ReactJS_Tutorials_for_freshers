import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
import {
  ADD_USER_SUCCESS,
  ADD_USER__ERROR,
  DEL_USER_SUCCESS,
  DEL_USER__ERROR,
  LIST_ERROR,
  LIST_SUCCESS,
  LOAD_ADD_USER,
  LOAD_DEL_USER,
  LOAD_UPDATE_USER,
  LOAD_USERS,
  UPDATE_USER_SUCCESS,
  UPDATE_USER__ERROR,
} from "./ConstActions";
import { useState } from "react";

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});
const URL = "/serverUserData";

const UserList = ({
  list,
  fetchUserList,
  loading,
  addUser,
  deleteUser,
  updateUser,
}) => {
  const [userName, setUserName] = useState("");
  const [userId, setUseId] = useState("");
  const [editUser, setEditUser] = useState("");

  useEffect(() => {
    fetchUserList();
  }, [fetchUserList]);

  console.log("list", list);

  return (
    <>
      <div className="row">
        <div className="col-4">
          <label htmlFor="user">User</label>
          <input
            type="text"
            className="form-control"
            value={userName}
            maxLength={20}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="col-4">
          <button
            className="form-control mt-4"
            onClick={() => {
              if (!userName) return;
              addUser(userName);
              setUserName("");
            }}
          >
            Add User
          </button>
        </div>
      </div>
      <div className="mt-3">
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <div>
            {list && list.length > 0 ? (
              list.map((user) => {
                return (
                  <div key={user.id} className="row mt-2">
                    <div className="col-6 ">
                      <div className="d-flex  justify-content-between ">
                        {userId === user.id ? (
                          <>
                            <div>
                              {/* <h3>{user.title}</h3> */}
                              <input
                                type="text"
                                className="form-controle"
                                value={editUser}
                                onChange={(e) => setEditUser(e.target.value)}
                              />
                            </div>
                            <div className="d-flex  justify-content-between ">
                              <div className="me-2">
                                <button
                                  className="form-control"
                                  onClick={() => {
                                    updateUser(user.id, editUser);
                                    setUseId("");
                                  }}
                                >
                                  Update
                                </button>
                              </div>
                            </div>
                          </>
                        ) : (
                          <>
                            <div>
                              <h3>{user.title}</h3>
                            </div>
                            <div className="d-flex  justify-content-between ">
                              <div className="me-2">
                                <button
                                  className="form-control"
                                  onClick={() => {
                                    setUseId(user.id);
                                    setEditUser(user.title);
                                  }}
                                >
                                  Edit
                                </button>
                              </div>
                              <div>
                                <button
                                  className="form-control"
                                  onClick={() => {
                                    deleteUser(user.id);
                                  }}
                                >
                                  Delete
                                </button>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <h1>List is empty</h1>
            )}
          </div>
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    list: state.userList.list,
    loading: state.userList.loading,
    error: state.userList.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserList: () => {
      fetchData(dispatch);
    },
    addUser: (userName) => {
      addUserToList(dispatch, userName);
    },
    updateUser: (id, userName) => {
      updateUserToList(dispatch, id, userName);
    },
    deleteUser: (id) => {
      deleteUserFromList(dispatch, id);
    },
  };
};

const updateUserToList = async (dispatch, id, userName) => {
  dispatch({ type: LOAD_UPDATE_USER });
  console.log("id,name: ", id, userName);
  try {
    const response = await axiosClient.put(`${URL}/${id}`, {
      title: userName,
    });
    const newList = response.data;
    dispatch({ type: UPDATE_USER_SUCCESS, payload: newList });
  } catch (error) {
    dispatch({ type: UPDATE_USER__ERROR });
  }
};

const deleteUserFromList = async (dispatch, id) => {
  dispatch({ type: LOAD_DEL_USER });
  try {
    await axiosClient.delete(`${URL}/${id}`).then(() => {
      dispatch({ type: DEL_USER_SUCCESS, payload: id });
    });
  } catch (error) {
    dispatch({ type: DEL_USER__ERROR });
  }
};

const addUserToList = async (dispatch, userName) => {
  let addId = getFormatedDate_Time(new Date());
  dispatch({ type: LOAD_ADD_USER });
  try {
    const response = await axiosClient.post(URL, {
      id: addId,
      title: userName,
    });
    const newList = response.data;
    dispatch({ type: ADD_USER_SUCCESS, payload: newList });
  } catch (error) {
    dispatch({ type: ADD_USER__ERROR });
  }
};

const fetchData = async (dispatch) => {
  dispatch({ type: LOAD_USERS });
  try {
    const response = await axiosClient.get(URL);
    const newList = response.data;
    dispatch({ type: LIST_SUCCESS, payload: newList });
  } catch (error) {
    dispatch({ type: LIST_ERROR });
  }
};
export function getFormatedDate_Time(d) {
  if (d) {
    return (
      ("0" + d.getDate()).slice(-2) +
      ("0" + (Number(d.getMonth()) + 1)).slice(-2) +
      d.getFullYear() +
      "_" +
      ("0" + d.getHours()).slice(-2) +
      ("0" + d.getMinutes()).slice(-2) +
      ("0" + d.getSeconds()).slice(-2)
    );
  }
  return d;
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
