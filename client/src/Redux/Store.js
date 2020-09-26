import { createStore, applyMiddleware } from "redux";
import Reducer from "./Reducer";
import thunk from "redux-thunk";

const middleware = [thunk];
const store = createStore(Reducer, applyMiddleware(...middleware));
export default store;
