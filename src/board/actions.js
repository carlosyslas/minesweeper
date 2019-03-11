export const CREATE_NEW_BOARD = "CREATE_NEW_BOARD";
export const UNCOVER_CELL = "UNCOVER_CELL";

export const createNewBoard = ({ width, height, mines }) => ({
  type: CREATE_NEW_BOARD,
  payload: {
    width,
    height,
    mines
  }
});

export const uncoverCell = ({ row, col }) => ({
  type: UNCOVER_CELL,
  payload: {
    row,
    col
  }
});
