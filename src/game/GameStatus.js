import React from "react";
import styled from "styled-components";
import { GAME_STATUS } from "./status/constants";
import theme from "../theme";

const Container = styled.div`
  position: fixed;
  top: 150px;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 30px;
  color: ${props => props.color};
  text-shadow: -2px -2px 0 ${theme.whiteColor}, 0px -2px 0 ${theme.whiteColor},
    2px -2px 0 ${theme.whiteColor}, -2px 2px 0 ${theme.whiteColor},
    0px 2px ${theme.whiteColor}, 2px 2px 0 ${theme.whiteColor},
    0px 0px 60px ${theme.whiteColor}, 0px 0px 40px ${theme.whiteColor},
    0px 0px 20px ${theme.whiteColor};

  @media (max-width: 400px) {
    font-size: 25px;
  }
`;

const LOST_COLOR = "#c33300";
const WON_COLOR = "#0067cb";

const GameStatus = ({ gameStatus }) => {
  if (gameStatus === GAME_STATUS.RUNNING || gameStatus === GAME_STATUS.MENU) {
    return null;
  }

  const color = gameStatus === GAME_STATUS.LOST ? LOST_COLOR : WON_COLOR;
  const text =
    gameStatus === GAME_STATUS.LOST ? "Game Over" : "Congratulations!";

  return (
    <Container color={color}>
      <h2>{text}</h2>
    </Container>
  );
};

export default GameStatus;
