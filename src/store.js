import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./redux-app1/reducers";
import createSagaMiddleware from "redux-saga"
import rootSaga from "./redux-app1/saga";
import logger from "redux-logger";

// import counterReducer from "./redux-app1/CounterReducer";
// import userNameReducer from "./redux-app1/UserNameReducer";
// import userListReducer from "./redux-app1/UserListReducer";

const sagaMiddleware=createSagaMiddleware()

export const store = configureStore({
  reducer: rootReducer,
  middleware:()=>[logger,sagaMiddleware]
  // {
  // counter: counterReducer,
  // userName: userNameReducer,
  // userList: userListReducer,
  // },
});
sagaMiddleware.run(rootSaga)
