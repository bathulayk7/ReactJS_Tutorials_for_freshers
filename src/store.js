import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./redux-app1/CounterReducer";
import userNameReducer from "./redux-app1/UserNameReducer";

export const store = configureStore({
  reducer: { counter: counterReducer, userName: userNameReducer },
});
