import React from 'react';
import { SwatchesPicker as ColorPicker } from 'react-color';
import { Wrapper, Container } from './styles';
import Easel from '../../components/Easel';
import { getGridCoordinates } from '../../utils/galleryTransforms';

class Canvas extends React.Component {
  state = {
    pixels: [],
    canvas: [],
    easelColor: 'black'
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
    console.log('coord', getGridCoordinates(block, color));

    this.setState(prevState => {
      const newCanvas = prevState.canvas.fill({ color }, block, block + 1);
      return {
        canvas: newCanvas
      };
    });
  };

  handleChangeComplete = color => {
    this.setState({ easelColor: color.hex });
  };

  render() {
    return (
      <Wrapper>
        <Container>
          <div>
            <Easel
              savePixel={this.savePixel}
              canvas={this.state.canvas}
              easelColor={this.state.easelColor}
            />
          </div>

          <ColorPicker
            height={'100%'}
            color={this.state.easelColor}
            onChangeComplete={this.handleChangeComplete}
          />
        </Container>
      </Wrapper>
    );
  }
}

export default Canvas;
