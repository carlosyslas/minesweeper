import { combineReducers } from "redux-immutable";
import game from "./game/reducer";

const rootReducer = combineReducers({
  game
});

export default rootReducer;
