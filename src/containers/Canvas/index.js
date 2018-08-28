import React from 'react';
import { SwatchesPicker as ColorPicker } from 'react-color';
import { Wrapper, Container } from './styles';
import Easel from '../../components/Easel';
import { getGridCoordinates } from '../../utils/galleryTransforms';

class Canvas extends React.Component {
  state = {
    pixels: [],
    canvas: []
  };
  componentDidMount() {
    const canvas = Array.from(Array(256));
    canvas.fill({ color: 'transparent' });
    this.setState({
      canvas
    });
  }

  savePixel = (block, color) => {
    console.log('block', block);
    console.log('color', color);

    this.setState(prevState => {
      const newCanvas = prevState.canvas.fill({ color }, block, block + 1);
      return {
        canvas: newCanvas
      };
    });

    console.log('coord', getGridCoordinates(block, color));
    // this.setState({
    //   canvas[blockNum].color: color
    // })
  };
  render() {
    return (
      <Wrapper>
        <Container>
          <div>
            <Easel savePixel={this.savePixel} canvas={this.state.canvas} />
          </div>

          <ColorPicker height={'100%'} />
        </Container>
      </Wrapper>
    );
  }
}

export default Canvas;
