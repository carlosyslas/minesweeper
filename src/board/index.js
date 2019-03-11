import React from "react";
import styled from "styled-components";

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
  display: inline-block;
`;

const boardState = [
  [
    {
      value: 0,
      covered: true
    },
    {
      value: 1,
      covered: true
    },
    {
      value: 0,
      covered: true
    },
    {
      value: 1,
      covered: true
    },
    {
      value: 0,
      covered: true
    }
  ],
  [
    {
      value: 0,
      covered: true
    },
    {
      value: 1,
      covered: true
    },
    {
      value: 0,
      covered: true
    },
    {
      value: 1,
      covered: true
    },
    {
      value: 0,
      covered: true
    }
  ],
  [
    {
      value: 0,
      covered: true
    },
    {
      value: 1,
      covered: true
    },
    {
      value: 0,
      covered: true
    },
    {
      value: 1,
      covered: true
    },
    {
      value: 0,
      covered: true
    }
  ],
  [
    {
      value: 0,
      covered: true
    },
    {
      value: 1,
      covered: true
    },
    {
      value: 0,
      covered: true
    },
    {
      value: 1,
      covered: true
    },
    {
      value: 0,
      covered: true
    }
  ],
  [
    {
      value: 0,
      covered: true
    },
    {
      value: 1,
      covered: true
    },
    {
      value: 0,
      covered: true
    },
    {
      value: 1,
      covered: true
    },
    {
      value: 0,
      covered: true
    }
  ],
  [
    {
      value: 0,
      covered: true
    },
    {
      value: 1,
      covered: true
    },
    {
      value: 0,
      covered: true
    },
    {
      value: 1,
      covered: true
    },
    {
      value: 0,
      covered: true
    }
  ]
];

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  text-align: center;
`;

const BoardScreen = () => (
  <Container>
    {boardState.map(row => (
      <Row>
        {row.map(cell => (
          <Cell>{cell.value}</Cell>
        ))}
      </Row>
    ))}
  </Container>
);

export default BoardScreen;
