export const CREATE_NEW_BOARD = "CREATE_NEW_BOARD";
export const UNCOVER_CELL = "UNCOVER_CELL";
export const FLAG_CELL = "FLAG_CELL";
export const UNFLAG_CELL = "UNFLAG_CELL";

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

export const flagCell = ({ row, col }) => ({
  type: FLAG_CELL,
  payload: {
    row,
    col
  }
});

export const unflagCell = ({ row, col }) => ({
  type: UNFLAG_CELL,
  payload: {
    row,
    col
  }
});
