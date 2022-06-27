import { combineReducers } from "redux";
import userReducer from "./reducer";

const RootReducer = combineReducers({
    userReducer,
});
export default RootReducer;