import React, { Fragment } from 'react';
import Header from '../../components/Header';
import ArtworkList from '../../components/ArtworkList';
import { urlEnv, configEnv } from '../../utils/urlEnv';
import Head from '../../components/Head';
import sortBy from 'lodash.sortby';
import wretch from 'wretch';
import configContents from '../../utils/configContents';
import URL from 'url-parse';

class Gallery extends React.Component {
  state = {
    artwork: [],
    isOwner: false,
    title: null,
    description: null,
    siteError: false
  };

  async componentDidMount() {
    window.scrollTo(0, 0);
    try {
      const {
        title = '',
        description = '',
        isOwner = false,
        isDat = false
      } = await this.loadArchiveInfo();
      const artwork = await this.loadHttpArtwork();

      this.setState({
        isOwner,
        artwork,
        title,
        description,
        isDat
      });
    } catch (error) {
      console.log('Error:', error);
      this.setState({
        siteError: true
      });
    }
  }

  loadArchiveInfo = async () => {
    try {
      const archive = await new global.DatArchive(urlEnv());
      const { title, description, isOwner } = await archive.getInfo();
      return { title, description, isOwner, isDat: true };
    } catch (error) {
      const { title, description } = await wretch('dat.json')
        .get()
        .json();
      return { title, description, isDat: false };
    }
  };

  loadHttpArtwork = async () => {
    const api = await wretch(`${configEnv(true)}/gallery-manifest.json`)
      .get()
      .json(json => json);

    const promises = await api.works.map(async artwork => {
      const artworkResponse = await wretch(
        `${configEnv(true)}/art/${artwork}.json`
      )
        .get()
        .json();
      return artworkResponse;
    });

    const results = await Promise.all(promises);
    return results;
  };

  removeFromGallery = async pathname => {
    const archive = await new global.DatArchive(urlEnv());
    const works = await archive.readFile(`/gallery-manifest.json`);

    await archive.unlink(`/gallery-manifest.json`);

    const oldWorks = await JSON.parse(works);
    const newWorks = await oldWorks.works;

    const promises = await newWorks.filter(item => {
      const path = URL(pathname)
        .pathname.substr(URL(pathname).pathname.lastIndexOf('/') + 1)
        .split('.');

      return item !== path[0];
    });

    const newAdjusted = await Promise.all(promises);

    await archive.unlink(pathname);
    await archive.writeFile(
      `/gallery-manifest.json`,
      configContents(newAdjusted)
    );
    const artwork = await this.loadHttpArtwork();
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
          loadArtwork={this.loadArtwork}
          setArtworkState={this.setArtworkState}
          isDat={this.state.isDat}
        />
        <ArtworkList
          artwork={sortBy(this.state.artwork, ['dateTime']).reverse()}
          isOwner={this.state.isOwner}
          removeFn={this.removeFromGallery}
        />

        {this.state.siteError && (
          <Fragment>
            <div style={{ padding: '40px' }}>
              <p>Looks like there was an error.</p>
            </div>
          </Fragment>
        )}
      </Fragment>
    );
  }
}

export default Gallery;
