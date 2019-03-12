import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { selectBoard } from "./selectors";
import { createNewBoard, uncoverCell, flagCell, unflagCell } from "./actions";
import { selectGameStatus } from "../status/selectors";
import { HAS_MINE } from "./reducer";
import { setGameStatus } from "../status/actions";
import { GAME_STATUS } from "../status/constants";

const theme = {
  cellSize: 30,
  minesCountColors: [
    "#00C9A7",
    "#008F7A",
    "#0089BA",
    "#2C73D2",
    "#845EC2",
    "#D65DB1",
    "#FF6F91",
    "#FF9671"
  ]
};

const Cell = styled.div`
  width: ${theme.cellSize}px;
  height: ${theme.cellSize}px;
  background: ${props => (props.covered ? "#6cb7ff" : "#fff")};
  border: 2px solid #333;
  border-radius: 4px;
  text-align: center;
  font-size: ${theme.cellSize * 0.6}px;
  line-height: ${theme.cellSize}px;
  transition: 0.3s;
  box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.15) inset;
  cursor: pointer;
  :hover {
    filter: brightness(1.2);
  }
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Container = styled.div`
  max-width: 960px;
  margin: 30px auto;
  text-align: center;
`;

const Mine = styled.div`
  width: ${theme.cellSize / 2}px;
  height: ${theme.cellSize / 2}px;
  border-radius: 50%;
  background: #ff7500;
  margin: 0 auto;
  display: inline-block;
  vertical-align: middle;
  box-shadow: 0px 0px 5px 1px #ff3f00, 0px 0px 3px 0px #fffc00 inset;
`;

const FlagContainer = styled.div`
  font-size: 12px;
  color: red;
`;
const Flag = () => (
  <FlagContainer>
    <i className="fas fa-flag" />
  </FlagContainer>
);

const MinesCount = styled.span`
  color: ${props => theme.minesCountColors[props.value - 1]};
`;

const CellContent = ({ value, covered, flagged }) => {
  if (flagged) {
    return <Flag />;
  }

  if (value === 0) {
    return null;
  }

  if (covered) {
    return null;
  }

  if (value < 0) {
    return <Mine />;
  }

  return <MinesCount value={value}>{value}</MinesCount>;
};

const BoardScreen = ({
  board,
  gameStatus,
  createNewBoard,
  uncoverCell,
  flagCell,
  unflagCell,
  setGameStatus
}) => (
  <Container>
    <button
      onClick={() => {
        setGameStatus(GAME_STATUS.RUNNING);
        createNewBoard({ width: 9, height: 9, mines: 10 });
      }}
    >
      New
    </button>
    {board.map((row, r) => (
      <Row>
        {row.map((cell, col) => (
          <Cell
            covered={cell.covered}
            onClick={() => {
              if (gameStatus !== GAME_STATUS.RUNNING) {
                return;
              }

              uncoverCell({ row: r, col });
              if (board.getIn([r, col, "value"]) === HAS_MINE) {
                setGameStatus(GAME_STATUS.LOST);
              }
            }}
            onContextMenu={e => {
              e.preventDefault();

              if (gameStatus !== GAME_STATUS.RUNNING) {
                return;
              }

              if (cell.flagged) {
                unflagCell({ row: r, col });
              } else {
                flagCell({ row: r, col });
              }
            }}
          >
            <CellContent
              value={cell.value}
              covered={cell.covered}
              flagged={cell.flagged}
            />
          </Cell>
        ))}
      </Row>
    ))}
  </Container>
);

const mapStateToProps = state => ({
  board: selectBoard(state),
  gameStatus: selectGameStatus(state)
});

const mapDispatchToProps = {
  createNewBoard,
  uncoverCell,
  flagCell,
  unflagCell,
  setGameStatus
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardScreen);
