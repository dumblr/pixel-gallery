import React from 'react';
import { H1, H2 } from '../AppStyles/styles';
import { Wrapper, TopContainer, StyledLink } from './styles';
import URL from 'url-parse';
import urlEnv from '../../utils/urlEnv';
import { EMPTY_GALLERY } from '../../config';

class Header extends React.Component {
  state = {
    newArtworkUrl: '',
    error: ''
  };

  updateNewArtworkUrl = e => {
    this.setState({
      newArtworkUrl: e.target.value
    });
  };

  addArtwork = async e => {
    await e.preventDefault();
    const otherArchive = await new global.DatArchive(this.state.newArtworkUrl);
    const pathname = await URL(this.state.newArtworkUrl).pathname;
    const artwork = await otherArchive.readFile(`${pathname}`);
    const archive = await new global.DatArchive(urlEnv());

    await archive.writeFile(`${pathname}`, artwork);
  };

  createGallery = async () => {
    const newGallery = await global.DatArchive.fork(EMPTY_GALLERY, {
      title: 'Name of gallery – will show up at top of site',
      description: 'Description of gallery – will show up below title',
      prompt: true
    });

    await window.location.replace(newGallery.url);
  };

  render() {
    const { title, description } = this.props;

    return (
      <Wrapper>
        <TopContainer>
          <div>
            <H1>{title}</H1>
            <H2>{description}</H2>
          </div>
          <div>
            <StyledLink to="info">/info</StyledLink>
            <StyledLink to="canvas">/canvas</StyledLink>
            <button onClick={this.createGallery}>
              create your own pixel-gallery
            </button>
          </div>
        </TopContainer>

        <label>
          <span>Add artwork to your gallery</span>
          <input
            placeholder="dat://xxxxxxxxxxxxxxxxx/art/zzzz-zzzz-zzzz-zzzz.json"
            value={this.state.newArtworkUrl}
            onChange={e => this.updateNewArtworkUrl(e)}
          />
          <button onClick={e => this.addArtwork(e)}>submit</button>
        </label>
      </Wrapper>
    );
  }
}

export default Header;
