import { createStore } from "redux";
import rootReducer from "../reducers - Copy";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
