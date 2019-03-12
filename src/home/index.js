import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  color: #fff;
  max-width: 960px;
  margin: 0 auto;
`;

const Inner = styled.div`
  margin: 30px;
`;

const Home = () => (
  <Container>
    <Inner>
      <h1>Start new game</h1>
      Home <Link to="/game">Game</Link>
    </Inner>
  </Container>
);

export default Home;
