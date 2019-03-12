import { SET_GAME_STATUS } from "./actions";
import { GAME_STATUS } from "./constants";

const status = (state = GAME_STATUS.MENU, { type, payload } = {}) => {
  if (type === SET_GAME_STATUS) {
    return payload;
  }

  return state;
};

export default status;
