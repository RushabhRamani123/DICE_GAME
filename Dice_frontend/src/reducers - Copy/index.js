import { combineReducers } from "redux";
import authReducer from "./auth - Copy";
import userReducer from "./user";
const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  
});
export default rootReducer;
