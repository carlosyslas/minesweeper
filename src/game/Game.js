import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Board from "./board";
import { selectGameStatus } from "./status/selectors";
import GameStatus from "./GameStatus";

const Container = styled.div`
  max-width: 960px;
  margin: 30px auto;
  text-align: center;
`;

const Game = ({ gameStatus }) => (
  <Container>
    <Board />
    <GameStatus gameStatus={gameStatus} />
  </Container>
);

const mapStateToProps = state => ({
  gameStatus: selectGameStatus(state)
});

export default connect(mapStateToProps)(Game);
