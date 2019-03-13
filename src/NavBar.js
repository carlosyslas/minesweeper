import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import theme from "./theme";

const Container = styled.div`
  padding: 15px;
  a {
    padding: 5px;
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
    &.active {
      display: none;
    }
  }
`;

const NavBar = () => (
  <Container>
    <NavLink exact to="/" activeClassName="active">
      <i className="fas fa-arrow-left" />
    </NavLink>
  </Container>
);

export default NavBar;
