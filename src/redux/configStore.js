import { combineReducers, configureStore } from "@reduxjs/toolkit";
import musicSlice from "./modules/musicSlice";
import music from "../redux/modules/musicSlice"
// const reducer = combineReducers({
//   musicSlice,
// });

const store = configureStore({
  reducer: {
    musicSlice: musicSlice,music:music 
  },
});

export default store;
