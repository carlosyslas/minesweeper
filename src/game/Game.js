import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import Board from "./board";
import { selectGameStatus } from "./status/selectors";
import GameStatus from "./GameStatus";
import { GAME_STATUS } from "./status/constants";

const Game = ({ gameStatus }) => {
  if (gameStatus === GAME_STATUS.MENU) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <Board />
      <GameStatus gameStatus={gameStatus} />
    </div>
  );
};

const mapStateToProps = state => ({
  gameStatus: selectGameStatus(state)
});

export default connect(mapStateToProps)(Game);
