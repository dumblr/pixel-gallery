import React, { Fragment } from 'react';
import { SwatchesPicker as ColorPicker } from 'react-color';
import {
  Wrapper,
  Container,
  Header,
  ColorPickerContainer,
  Input,
  Button
} from './styles';
import Easel from '../../components/Easel';
import { getGridCoordinates } from '../../utils/galleryTransforms';
import { Link, navigate } from '@reach/router';
import fileContents from '../../utils/fileContents';
import { v4 } from 'uuid';
import { urlEnv } from '../../utils/urlEnv';
import Head from '../../components/Head';
import configContents from '../../utils/configContents';

class Canvas extends React.Component {
  state = {
    canvas: [],
    easelColor: 'black',
    artist: '',
    imageDescription: '',
    userComment: '',
    copyright: '',
    dateTime: '',
    isDat: true
  };
  async componentDidMount() {
    await window.scrollTo(0, 0);
    const canvas = await Array.from(Array(256));
    await canvas.fill({ color: 'white' });

    try {
      await new global.DatArchive(urlEnv());
      await this.setState({
        canvas
      });
    } catch (error) {
      console.log('Error', error);
      await this.setState({
        canvas,
        isDat: false
      });
    }
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

    const promises = await this.state.canvas.reduce((newCans, pixel, iter) => {
      newCans.push(getGridCoordinates(iter, pixel.color));
      return newCans;
    }, []);

    const pixelConversion = await Promise.all(promises);

    const works = await archive.readFile(`/gallery-manifest.json`);
    const oldWorks = await JSON.parse(works);

    await archive.unlink(`/gallery-manifest.json`);

    const newWorks = await oldWorks.works;
    await newWorks.push(newArtId);

    await archive.writeFile(`/gallery-manifest.json`, configContents(newWorks));

    await archive.writeFile(
      `/art/${newArtId}.json`,
      fileContents(
        `${archive.url}/art/${newArtId}.json`,
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
        <Head title="Canvas" />
        <Header>
          <Link to="/">← back to gallery</Link>
        </Header>
        <Container>
          {this.state.isDat ? (
            <Fragment>
              <div>
                <Easel
                  savePixel={this.savePixel}
                  canvas={this.state.canvas}
                  easelColor={this.state.easelColor}
                />
                <div>
                  <Input
                    placeholder="Artist Name"
                    value={this.state.artist}
                    onChange={e => this.updateInputDetail(e, 'artist')}
                  />
                  <Input
                    placeholder="Artwork Title"
                    value={this.state.imageDescription}
                    onChange={e =>
                      this.updateInputDetail(e, 'imageDescription')
                    }
                  />
                  <Input
                    placeholder="Artwork Description"
                    value={this.state.userComment}
                    onChange={e => this.updateInputDetail(e, 'userComment')}
                  />
                  <Input
                    placeholder="Copyright info"
                    value={this.state.copyright}
                    onChange={e => this.updateInputDetail(e, 'copyright')}
                  />
                  <Button onClick={this.publishArtwork}>
                    save artwork to gallery
                  </Button>
                </div>
              </div>

              <ColorPickerContainer>
                <ColorPicker
                  height={'100%'}
                  color={this.state.easelColor}
                  onChangeComplete={this.handleChangeComplete}
                />
              </ColorPickerContainer>
            </Fragment>
          ) : (
            <div>
              <p>This page is not accessible in your browser.</p>
            </div>
          )}
        </Container>
      </Wrapper>
    );
  }
}

export default Canvas;
