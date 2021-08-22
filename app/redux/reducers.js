import { combineReducers } from "redux";

import upload from "./UploadImages/uploadReducer";

const appReducers = combineReducers(
  // add more reducers here
  upload
);

function rootReducer(state, action) {
  return appReducers(state, action);
}

export default rootReducer;
