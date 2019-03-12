import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { selectBoard } from "./selectors";
import { createNewBoard, uncoverCell, flagCell, unflagCell } from "./actions";

const theme = {
  cellSize: 25
};

const Cell = styled.div`
  width: ${theme.cellSize}px;
  height: ${theme.cellSize}px;
  background: ${props => (props.covered ? "#6cb7ff" : "#fff")};
  border: 1px solid;
  text-align: center;
  font-size: ${theme.cellSize * 0.6}px;
  line-height: ${theme.cellSize}px;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  text-align: center;
`;

const Mine = styled.div`
  width: ${theme.cellSize / 2}px;
  height: ${theme.cellSize / 2}px;
  border-radius: 50%;
  background: #f90;
  margin: 0 auto;
  display: inline-block;
  vertical-align: middle;
`;

const CellContent = ({ value, covered, flagged }) => {
  if (flagged) {
    return <div>🚩</div>;
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

  return <div>{value}</div>;
};

const BoardScreen = ({
  board,
  createNewBoard,
  uncoverCell,
  flagCell,
  unflagCell
}) => (
  <Container>
    <button onClick={() => createNewBoard({ width: 3, height: 3, mines: 2 })}>
      New
    </button>
    {board.map((row, r) => (
      <Row>
        {row.map((cell, col) => (
          <Cell
            covered={cell.covered}
            onClick={() => uncoverCell({ row: r, col })}
            onContextMenu={e => {
              e.preventDefault();

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
  board: selectBoard(state)
});

const mapDispatchToProps = {
  createNewBoard,
  uncoverCell,
  flagCell,
  unflagCell
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardScreen);
