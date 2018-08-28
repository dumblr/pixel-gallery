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
  background-color: ${props => (props.bgColor ? props.bgColor : 'transparent')};

  :hover {
    background-color: ${props =>
      props.hoverColor ? props.hoverColor : 'rgba(170, 177, 192, 0.4)'};
    cursor: pointer;
  }
`;

export const Container = styled.div`
  border: 2px solid #000;
  width: 480px;
  height: 480px;
`;

class Easel extends React.Component {
  state = {
    easelColor: 'black'
  };
  render() {
    return (
      <Container>
        {console.log('canvas pro', this.props.canvas)}
        <Grid>
          {this.props.canvas.map((x, i) => (
            <Block
              key={i}
              bgColor={x.color}
              hoverColor={this.state.easelColor}
              onClick={() => this.props.savePixel(i, this.state.easelColor)}
            />
          ))}
        </Grid>
      </Container>
    );
  }
}

export default Easel;
