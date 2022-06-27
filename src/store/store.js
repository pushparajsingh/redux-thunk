import { legacy_createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import RootReducer from "../reducers";

const store = legacy_createStore(RootReducer,applyMiddleware(thunk));
export default store;