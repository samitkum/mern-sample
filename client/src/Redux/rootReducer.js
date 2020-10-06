import TaskReducer from "./Task/Reducer";
import AuthReducer from "./Auth/Reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  task: TaskReducer,
  auth: AuthReducer,
});

export default rootReducer;
