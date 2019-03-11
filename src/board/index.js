import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { selectBoard } from "./selectors";
import { createNewBoard } from "./actions";

const theme = {
  cellSize: 25
};

const Cell = styled.div`
  width: ${theme.cellSize}px;
  height: ${theme.cellSize}px;
  background: yellow;
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

const BoardScreen = ({ board, createNewBoard }) => (
  <Container>
    <button onClick={() => createNewBoard({ width: 3, height: 3, mines: 2 })}>
      New
    </button>
    {board.map(row => (
      <Row>
        {row.map(cell => (
          <Cell>{cell.value}</Cell>
        ))}
      </Row>
    ))}
  </Container>
);

const mapStateToProps = state => ({
  board: selectBoard(state)
});

const mapDispatchToProps = {
  createNewBoard
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardScreen);
