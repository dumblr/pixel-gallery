import React, { Component } from 'react';
import EachArtwork from './components/EachArtwork';
import { H1, H2 } from './components/AppStyles/styles';
import urlEnv from './utils/urlEnv';

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
  };

  deleteArtwork = () => {
    // deletes new art files
  };

  render() {
    return (
      <div>
        <div style={{ padding: '40px' }}>
          <H1>{this.state.title}</H1>
          <H2>{this.state.description}</H2>
          <div>
            <a href="#">info</a>
          </div>
          <div>
            <form>
              <label>
                <span>Add artwork to your gallery</span>
                <input placeholder="dat://qqqqqqqqqqq/art/example.json" />
                <input type="submit" />
              </label>
            </form>
          </div>
        </div>
        {this.state.artwork &&
          this.state.artwork.map((art, i) => (
            <EachArtwork
              key={i}
              imageDescription={art.exif.imageDescription}
              artist={art.exif.artist}
              copyright={art.exif.copyright}
              dateTime={art.exif.dateTime}
              software={art.exif.software}
              userComment={art.exif.userComment}
              pixels={art.pxif.pixels}
            />
          ))}
      </div>
    );
  }
}

export default App;
