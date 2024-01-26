import { configureStore } from "@reduxjs/toolkit";
import StateSliceReducers from "../reducers/StateSliceReducers";

export const store = configureStore({
  reducer: {
    FetchData: StateSliceReducers,
  },
});
export default store;
