import { HAS_MINE } from "./reducer";

export const selectBoard = state => state.getIn(["game", "board"]);

export const selectCoveredCellsCount = state =>
  selectBoard(state)
    .flatten()
    .count(cell => cell.get("covered") && cell.get("value") !== HAS_MINE);
