import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import theme from "../theme";
import { createNewBoard } from "../game/board/actions";
import { setGameStatus } from "../game/status/actions";
import { GAME_STATUS } from "../game/status/constants";
import { selectGameStatus } from "../game/status/selectors";

const Container = styled.div`
  color: #fff;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

const Title = styled.h2`
  margin: 0 0 50px;
  font-weight: 300;
`;

const Button = styled.button`
  text-align: left;
  border: 0;
  padding: 10px 30px;
  font-size: 20px;
  background: ${props => props.color};
  color: ${theme.whiteColor};
  display: block;
  width: 100%;
  margin-top: 10px;
  cursor: pointer;

  i {
    margin-right: 15px;
  }
`;

class Home extends Component {
  createNewGame = ({ width, height, mines }) => {
    const { createNewBoard, setGameStatus } = this.props;

    createNewBoard({ width, height, mines });
    setGameStatus(GAME_STATUS.RUNNING);
  };

  render() {
    const { gameStatus } = this.props;
    if (gameStatus === GAME_STATUS.RUNNING) {
      return <Redirect to="/game" />;
    }

    return (
      <Container>
        <div>
          <Title>Minesweeper</Title>
          <Button
            color="#9fd356"
            onClick={() =>
              this.createNewGame({ width: 9, height: 9, mines: 10 })
            }
          >
            <i className="fas fa-poop" />
            Easy 9x9
          </Button>
          <Button
            color="#d8bd00"
            onClick={() =>
              this.createNewGame({ width: 16, height: 16, mines: 26 })
            }
          >
            <i className="fas fa-fire-alt" />
            Medium 16x16
          </Button>
          <Button
            color="#e15554"
            onClick={() =>
              this.createNewGame({ width: 30, height: 16, mines: 50 })
            }
          >
            <i className="fas fa-biohazard" />
            Expert 30x16
          </Button>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  gameStatus: selectGameStatus(state)
});

const mapDispatchToProps = {
  createNewBoard,
  setGameStatus
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
