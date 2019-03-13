import { List } from "immutable";
import { HAS_MINE } from "./reducer";

export const selectBoard = state => state.getIn(["game", "board"]);

export const selectCoveredCellsCount = state =>
  selectBoard(state)
    .flatten()
    .count(cell => cell.get("covered") && cell.get("value") !== HAS_MINE);

export const selectBoardWidth = state =>
  state.getIn(["game", "board", 0], new List()).size;
