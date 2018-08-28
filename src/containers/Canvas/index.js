import React from 'react';
import { SwatchesPicker as ColorPicker } from 'react-color';
import { Wrapper, Container } from './styles';
import Easel from '../../components/Easel';

class Canvas extends React.Component {
  state = {
    pixels: []
  };
  componentDidMount() {
    const canvas = Array.from(Array(256));
    canvas.fill({ color: 'transparent' });
  }

  savePixel = (blockNum, color) => {
    console.log('here');
    // this.setState({
    //   canvas[blockNum].color: color
    // })
  };
  render() {
    return (
      <Wrapper>
        <Container>
          <div>
            <Easel />
          </div>

          <ColorPicker height={'100%'} />
        </Container>
      </Wrapper>
    );
  }
}

export default Canvas;
