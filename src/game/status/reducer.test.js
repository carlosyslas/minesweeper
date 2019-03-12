import reducer from "./reducer";
import { GAME_STATUS } from "./constants";
import { setGameStatus } from "./actions";

describe("gameStatusReducer", () => {
  it("returns the MENU status by default", () => {
    const state = reducer();

    expect(state).toEqual(GAME_STATUS.MENU);
  });

  it("sets the game status to the given value", () => {
    const initialStatue = GAME_STATUS.MENU;

    const state = reducer(initialStatue, setGameStatus(GAME_STATUS.RUNNING));

    expect(state).toEqual(GAME_STATUS.RUNNING);
  });
});
