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

const initialState = {
  list: [],
  loading: false,
  error: false,
};

const userListReducer = (state = initialState, action) => {
  switch (action.type) {
    //GET
    case LOAD_USERS:
      return { ...state, loading: true };
    case LIST_SUCCESS:
      return { ...state, loading: false, list: action.payload };
    case LIST_ERROR:
      return { ...state, loading: false, error: true };

    //POST
    case LOAD_ADD_USER:
      return { ...state, loading: true };
    case ADD_USER_SUCCESS:
      let newlist = [...state.list, action.payload];
      return { ...state, loading: false, list: newlist };
    case ADD_USER__ERROR:
      return { ...state, loading: false, error: true };

    //PUT
    case LOAD_UPDATE_USER:
      return { ...state, loading: true };
    case UPDATE_USER_SUCCESS:
      let updateList = state.list.map((user) => {
        if (user.id === action.payload.id) {
          return { id: action.payload.id, title: action.payload.title };
        }
        return user;
      });
      return { ...state, loading: false, list: updateList };
    case UPDATE_USER__ERROR:
      return { ...state, loading: false, error: true };

    //DELETE
    case LOAD_DEL_USER:
      return { ...state, loading: true };
    case DEL_USER_SUCCESS:
      let afterDelList = state.list.filter(
        (user) => user.id !== action.payload
      );
      return { ...state, loading: false, list: afterDelList };
    case DEL_USER__ERROR:
      return { ...state, loading: false, error: true };

    default:
      return state;
  }
};

export default userListReducer;
