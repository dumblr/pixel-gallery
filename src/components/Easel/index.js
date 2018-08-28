import React from 'react';
import styled from 'styled-components';

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Block = styled.div`
  width: 30px;
  height: 30px;
  outline: 1px solid black;
  background-color: transparent;

  :hover {
    background-color: rgba(170, 177, 192, 0.4);
    cursor: pointer;
  }
`;

export const Container = styled.div`
  border: 2px solid #000;
  width: 480px;
  height: 480px;
`;

class Easel extends React.Component {
  render() {
    const canvas = Array.from(Array(256));
    return (
      <Container>
        <Grid>
          {canvas.map((x, i) => (
            <Block key={i} />
          ))}
        </Grid>
      </Container>
    );
  }
}

export default Easel;
