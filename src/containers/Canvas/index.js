import React from 'react';
import { SwatchesPicker as ColorPicker } from 'react-color';
import {
  Wrapper,
  Container,
  Header,
  ColorPickerContainer,
  Input
} from './styles';
import Easel from '../../components/Easel';
import { getGridCoordinates } from '../../utils/galleryTransforms';
import { Link, navigate } from '@reach/router';
import fileContents from '../../utils/fileContents';
import { v4 } from 'uuid';
import urlEnv from '../../utils/urlEnv';

class Canvas extends React.Component {
  state = {
    pixels: [],
    canvas: [],
    easelColor: 'black',
    software: '',
    artist: '',
    imageDescription: '',
    userComment: '',
    copyright: '',
    dateTime: ''
  };
  componentDidMount() {
    const canvas = Array.from(Array(256));
    canvas.fill({ color: 'white' });
    this.setState({
      canvas
    });
  }

  savePixel = (block, color) => {
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

  publishArtwork = async () => {
    const newArtId = await v4();
    const archive = await new global.DatArchive(urlEnv());
    const pixelConversion = await this.state.canvas.reduce(
      (newCans, pixel, iter) => {
        newCans.push(getGridCoordinates(iter, pixel.color));
        return newCans;
      },
      []
    );

    await archive.writeFile(
      `/art/${newArtId}.json`,
      fileContents(
        this.state.software,
        this.state.artist,
        this.state.imageDescription,
        this.state.userComment,
        this.state.copyright,
        pixelConversion
      )
    );

    await navigate(`/`);
  };

  updateInputDetail = (e, key) => {
    this.setState({
      [key]: e.target.value
    });
  };

  render() {
    return (
      <Wrapper>
        <Header>
          <Link to="/">back to gallery</Link>
        </Header>
        <Container>
          <div>
            <Easel
              savePixel={this.savePixel}
              canvas={this.state.canvas}
              easelColor={this.state.easelColor}
            />
            <div>
              <Input
                placeholder="software"
                value={this.state.software}
                onChange={e => this.updateInputDetail(e, 'software')}
              />
              <Input
                placeholder="artist"
                value={this.state.artist}
                onChange={e => this.updateInputDetail(e, 'artist')}
              />
              <Input
                placeholder="image description"
                value={this.state.imageDescription}
                onChange={e => this.updateInputDetail(e, 'imageDescription')}
              />
              <Input
                placeholder="user comment"
                value={this.state.userComment}
                onChange={e => this.updateInputDetail(e, 'userComment')}
              />
              <Input
                placeholder="copyright"
                value={this.state.copyright}
                onChange={e => this.updateInputDetail(e, 'copyright')}
              />
              <button onClick={this.publishArtwork}>
                save artwork to gallery
              </button>
            </div>
          </div>

          <ColorPickerContainer>
            <ColorPicker
              height={'100%'}
              color={this.state.easelColor}
              onChangeComplete={this.handleChangeComplete}
            />
          </ColorPickerContainer>
        </Container>
      </Wrapper>
    );
  }
}

export default Canvas;
