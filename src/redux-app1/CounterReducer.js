import { DECR, INCR, RST } from "./ConstActions";

const initialState = {
  count: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCR:
      return { ...state, count: state.count + action.payload };
    case DECR:
      return { ...state, count: state.count - action.payload };
    case RST:
      return initialState;
    default:
      return state;
  }
};

export default counterReducer;
