import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import {
  selectBoard,
  selectCoveredCellsCount,
  selectBoardWidth
} from "./selectors";
import { createNewBoard, uncoverCell, flagCell, unflagCell } from "./actions";
import { selectGameStatus } from "../status/selectors";
import { HAS_MINE } from "./reducer";
import { setGameStatus } from "../status/actions";
import { GAME_STATUS } from "../status/constants";
import theme from "../../theme";

const Cell = styled.div`
  box-sizing: border-box;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: ${props =>
    props.covered ? theme.primaryColor : theme.whiteColor};
  border: 2px solid ${theme.bodyBackground};
  border-radius: 4px;
  text-align: center;
  font-size: ${props => props.size * 0.6}px;
  line-height: ${props => props.size}px;
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

const Mine = styled.div`
  width: ${props => props.size / 2}px;
  height: ${props => props.size / 2}px;
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

const CellContent = ({ value, covered, flagged, size }) => {
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
    return <Mine size={size} />;
  }

  return <MinesCount value={value}>{value}</MinesCount>;
};

const Container = styled.div`
  filter: ${props => (props.enabled ? "" : "brightness(0.9) blur(1px)")};
`;

class BoardScreen extends Component {
  componentDidUpdate() {
    const { setGameStatus, coveredCellsCount } = this.props;

    if (coveredCellsCount === 0) {
      setGameStatus(GAME_STATUS.WON);
    }
  }

  handleCellClick = ({ row, col }) => {
    const { board, gameStatus, setGameStatus, uncoverCell } = this.props;

    if (gameStatus !== GAME_STATUS.RUNNING) {
      return;
    }

    uncoverCell({ row, col });
    if (board.getIn([row, col, "value"]) === HAS_MINE) {
      setGameStatus(GAME_STATUS.LOST);
    }
  };

  handleCellRightClick = (e, { row, col }) => {
    const { board, gameStatus, unflagCell, flagCell } = this.props;
    e.preventDefault();

    if (gameStatus !== GAME_STATUS.RUNNING) {
      return;
    }

    if (board.getIn([row, col, "flagged"])) {
      unflagCell({ row, col });
    } else {
      flagCell({ row, col });
    }
  };

  render() {
    const { board, gameStatus, windowWidth, boardWidth } = this.props;

    const cellSize = Math.min(theme.cellSize, windowWidth / boardWidth);

    return (
      <Container enabled={gameStatus === GAME_STATUS.RUNNING}>
        {board.map((row, r) => (
          <Row>
            {row.map((cell, col) => (
              <Cell
                covered={cell.covered}
                onClick={() => this.handleCellClick({ row: r, col })}
                onContextMenu={e =>
                  this.handleCellRightClick(e, { row: r, col })
                }
                size={cellSize}
              >
                <CellContent
                  value={cell.value}
                  covered={cell.covered}
                  flagged={cell.flagged}
                  size={cellSize}
                />
              </Cell>
            ))}
          </Row>
        ))}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  board: selectBoard(state),
  gameStatus: selectGameStatus(state),
  coveredCellsCount: selectCoveredCellsCount(state),
  windowWidth: window.innerWidth,
  boardWidth: selectBoardWidth(state)
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
