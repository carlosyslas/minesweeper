import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { FaArrowLeft } from "react-icons/fa";
import theme from "./theme";
import { setGameStatus } from "./game/status/actions";
import { GAME_STATUS } from "./game/status/constants";
import { selectGameStatus } from "./game/status/selectors";

const Container = styled.div`
  padding: 15px;
  a {
    padding: 3px;
    width: 32px;
    height: 32px;
    box-sizing: border-box;
    text-align: center;
    display: inline-block;
    border: 1px solid;
    border-radius: 50%;
    transition: 0.3s;
    :hover {
      background: ${theme.primaryColor};
      border-color: transparent;
      color: ${theme.bodyBackground};
    }
  }
  svg {
    display: inline-block;
    vertical-align: middle;
  }
`;

const NavBar = ({ gameStatus, setGameStatus }) => (
  <Container>
    {gameStatus !== GAME_STATUS.MENU && (
      <NavLink exact to="/" onClick={() => setGameStatus(GAME_STATUS.MENU)}>
        <FaArrowLeft />
      </NavLink>
    )}
  </Container>
);

const mapStateToProps = state => ({
  gameStatus: selectGameStatus(state)
});

const mapDispatchToProps = {
  setGameStatus
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
