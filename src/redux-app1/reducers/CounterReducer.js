import {DECR_SUCCESS, INCR_SUCCESS, RST_SUCCESS } from "../ConstActions";

const initialState = {
  count: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCR_SUCCESS:
      return { ...state, count: state.count + action.payload };
    case DECR_SUCCESS:
      return { ...state, count: state.count - action.payload };
    case RST_SUCCESS:
      return initialState;
    default:
      return state;
  }
};

export default counterReducer;
