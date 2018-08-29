import React, { Fragment } from 'react';
import Header from '../../components/Header';
import ArtworkList from '../../components/ArtworkList';
import urlEnv from '../../utils/urlEnv';
import { Link } from '@reach/router';
import Head from '../../components/Head';
import sortBy from 'lodash.sortby';

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
      const { title, description, isOwner } = await archive.getInfo();
      const artwork = await this.loadArtwork(archive);

      this.setState({
        isOwner,
        artwork,
        title,
        description
      });
    } catch (error) {
      this.setState({
        siteError: true,
        isOwner: false,
        isDat: false
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
    console.log('pathname', pathname);
    await archive.unlink(pathname);
    const artwork = await this.loadArtwork(archive);
    this.setState({
      artwork
    });
  };

  setArtworkState = artwork => {
    this.setState({
      artwork
    });
  };

  render() {
    return (
      <Fragment>
        <Head title={this.state.title} />
        <Header
          title={this.state.title}
          description={this.state.description}
          isOwner={this.state.isOwner}
          isDat={this.state.isDat}
          loadArtwork={this.loadArtwork}
          setArtworkState={this.setArtworkState}
        />
        <ArtworkList
          artwork={sortBy(this.state.artwork, ['dateTime']).reverse()}
          isOwner={this.state.isOwner}
          removeFn={this.removeFromGallery}
        />
        {!this.state.isDat && (
          <Fragment>
            <div style={{ padding: '40px' }}>
              <p>
                This gallery is only viewable in browsers supporting the dat://
                protocol.
              </p>
            </div>
            <div style={{ padding: '40px' }}>
              <p>
                What is this? More info <Link to="info">here</Link>.
              </p>
            </div>
          </Fragment>
        )}
      </Fragment>
    );
  }
}

export default Gallery;
