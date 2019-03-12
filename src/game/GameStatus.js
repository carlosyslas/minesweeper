import React from "react";
import styled from "styled-components";
import { GAME_STATUS } from "./status/constants";
import theme from "../theme";

const Container = styled.div`
  position: fixed;
  top: 150px;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 50px 150px;
  font-size: 30px;
  color: ${theme.bodyBackground}
  text-shadow: -2px -2px 0 #fff, 0px -2px 0 #fff, 2px -2px 0 #fff,
    -2px 2px 0 #fff, 0px 2px #fff, 2px 2px 0 #fff, 0px 0px 60px #fff,
    0px 0px 40px #fff, 0px 0px 20px #fff;
`;

const GameStatus = ({ gameStatus }) =>
  gameStatus !== GAME_STATUS.RUNNING &&
  gameStatus !== GAME_STATUS.MENU && (
    <Container>
      {gameStatus === GAME_STATUS.LOST && <h2>Game Over</h2>}
      {gameStatus === GAME_STATUS.WON && <h2>Congratulations!</h2>}
    </Container>
  );

export default GameStatus;
