import React, { Component } from 'react';
import { Router } from '@reach/router';
import urlEnv from './utils/urlEnv';
import Gallery from './containers/Gallery';
import Canvas from './containers/Canvas';

class App extends Component {
  state = {
    artwork: [],
    isOwner: false,
    title: 'pixel-gallery',
    description: 'a p2p pxon canvas and gallery',
    siteError: false
  };
  async componentDidMount() {
    try {
      const archive = await new global.DatArchive(urlEnv());
      const { title, description } = await archive.getInfo();
      const artwork = await this.loadArtwork(archive); // get all artwork in artwork folder

      this.setState({
        isOwner: true,
        artwork,
        title,
        description
      });
    } catch (error) {
      // if any of the above results in an error
      // needs to be refactored
      // all should be capable of error probably?
      this.setState({
        siteError: true,
        isOwner: false
      });
    }
  }

  savePixel = (row, column, color) => {
    this.setState({
      [`${row}${column}`]: color
    });
  };

  loadArtwork = async archive => {
    const art = await archive.readdir('/art');
    if (art.length === 0) {
      return null;
    }
    const promises = art.map(async artwork => {
      const artworkResponse = await archive.readFile(`/art/${artwork}`);
      return JSON.parse(artworkResponse);
    });

    const results = await Promise.all(promises);
    return results;
  };

  createArtwork = () => {
    // creates art file in art folder
  };

  saveArtworkAsDraft = () => {
    // saves to drafts folder
  };

  loadSavedFromDraft = () => {
    // load from drafts folder into editor
    // display drafts in a list on the canvas page
  };

  deleteArtwork = () => {
    // deletes new art files
    // ability to do this in own gallery or a draft
  };

  render() {
    return (
      <Router>
        <Gallery
          path="/"
          title={this.state.title}
          description={this.state.description}
          artwork={this.state.artwork}
        />
        <Canvas path="/canvas" />
      </Router>
    );
  }
}

export default App;
