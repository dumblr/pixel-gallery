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
    siteError: false,
    isDat: true
  };

  async componentDidMount() {
    try {
      const archive = await new global.DatArchive(urlEnv());
      const { title, description } = await archive.getInfo();
      const artwork = await this.loadArtwork(archive);

      this.setState({
        isOwner: true,
        artwork,
        title,
        description
      });
    } catch (error) {
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

  removeFromGallery = async pathname => {
    const archive = await new global.DatArchive(urlEnv());
    await archive.unlink(pathname);
    // reload and setState
  };

  render() {
    return (
      <Fragment>
        <Header
          title={this.state.title}
          description={this.state.description}
          isOwner={this.state.isOwner}
          isDat={this.state.isDat}
        />
        <ArtworkList
          artwork={this.state.artwork}
          isOwner={this.state.isOwner}
          removeFn={this.removeFromGallery}
        />
        {this.state.http && (
          <div>
            <p>
              Looks like you're trying to view the gallery over http/https.
              Please access this site via dat://
            </p>
          </div>
        )}
      </Fragment>
    );
  }
}

export default Gallery;
