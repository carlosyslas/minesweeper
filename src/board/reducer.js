import { List } from "immutable";
import { UNCOVER_CELL, CREATE_NEW_BOARD } from "./actions";
import { CellRecord } from "./records";

const initialState = new List();

const HAS_MINE = -1;

const reduceUncoverCell = (state, { row, col }) => {
  if (row < state.size && col < state.get(row).size) {
    return state.setIn([row, col, "covered"], false);
  }

  return state;
};

const getMineValue = (board, row, col) => {
  if (row < 0 || col < 0) {
    return 0;
  }

  const cell = board.getIn([row, col]);
  if (cell && cell.value === HAS_MINE) {
    return 1;
  }

  return 0;
};

// TODO: add more tests for this function
const reduceCreateNewBoard = ({ width, height, mines }) => {
  const rows = [];

  for (let row = 0; row < height; row++) {
    const cells = [];

    for (let col = 0; col < width; col++) {
      cells.push(new CellRecord({}));
    }

    rows.push(new List(cells));
  }

  let board = new List(rows);

  for (let mine = 0; mine < mines; mine++) {
    let row = Math.floor(Math.random() * height);
    let col = Math.floor(Math.random() * width);

    while (board.getIn([row, col, "value"]) === HAS_MINE) {
      row = Math.floor(Math.random() * height);
      col = Math.floor(Math.random() * width);
    }

    board = board.setIn([row, col, "value"], HAS_MINE);
  }

  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      let mineValue = board.getIn([row, col, "value"]);
      if (mineValue !== HAS_MINE) {
        // TODO: extract this logic
        mineValue += getMineValue(board, row - 1, col - 1);
        mineValue += getMineValue(board, row - 1, col);
        mineValue += getMineValue(board, row - 1, col + 1);

        mineValue += getMineValue(board, row, col - 1);
        mineValue += getMineValue(board, row, col + 1);

        mineValue += getMineValue(board, row + 1, col - 1);
        mineValue += getMineValue(board, row + 1, col);
        mineValue += getMineValue(board, row + 1, col + 1);

        board = board.setIn([row, col, "value"], mineValue);
      }
    }
  }

  return board;
};

const reducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case UNCOVER_CELL:
      return reduceUncoverCell(state, payload);
    case CREATE_NEW_BOARD:
      return reduceCreateNewBoard(payload);
    default:
      return state;
  }
};

export default reducer;
