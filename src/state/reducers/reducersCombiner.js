import { combineReducers } from "redux";
import transactionReducer from "./transactionReducer";

 const reducers = combineReducers({
  transaction: transactionReducer,
});

export default reducers;