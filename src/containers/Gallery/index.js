import React, { Fragment } from 'react';
import Header from '../../components/Header';
import ArtworkList from '../../components/ArtworkList';
import urlEnv from '../../utils/urlEnv';

class Gallery extends React.Component {
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

  render() {
    return (
      <Fragment>
        <Header title={this.state.title} description={this.state.description} />
        <ArtworkList artwork={this.state.artwork} />
      </Fragment>
    );
  }
}

export default Gallery;
