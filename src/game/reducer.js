import { combineReducers } from "redux-immutable";
import board from "./board/reducer";
import status from "./status/reducer";

export default combineReducers({
  board,
  status
});
