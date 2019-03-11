import { combineReducers } from "redux-immutable";
import board from "./board/reducer";

const rootReducer = combineReducers({
  board
});

export default rootReducer;
