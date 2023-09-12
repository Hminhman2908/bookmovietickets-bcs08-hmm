import { combineReducers } from "redux";
import { bookTicketsReducer } from "./bookTicketsReducer";

export let rootReducer = combineReducers({
  bookTicketsReducer: bookTicketsReducer,
});
