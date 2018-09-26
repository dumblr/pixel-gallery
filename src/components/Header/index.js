import React from 'react';
import { H1, H2 } from '../AppStyles/styles';
import {
  Wrapper,
  StyledLink,
  TitleContainer,
  NavContainer,
  AddWrapper,
  AddTitle,
  CreateButton,
  CreateContainer,
  AddButton,
  AddInput
} from './styles';
import URL from 'url-parse';
import { urlEnv } from '../../utils/urlEnv';
import { DAT_URL } from '../../config';
import configContents from '../../utils/configContents';

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

    try {
      const otherArchive = await new global.DatArchive(
        this.state.newArtworkUrl
      );
      const pathname = await URL(this.state.newArtworkUrl).pathname;
      const artwork = await otherArchive.readFile(`${pathname}`);
      const archive = await new global.DatArchive(urlEnv());

      const works = await archive.readFile(`/gallery-manifest.json`);

      await archive.unlink(`/gallery-manifest.json`);

      const oldWorks = await JSON.parse(works);
      const newWorks = await oldWorks.works;
      const path = await URL(pathname)
        .pathname.substr(URL(pathname).pathname.lastIndexOf('/') + 1)
        .split('.');
      await newWorks.push(path[0]);

      await archive.writeFile(`${pathname}`, artwork);
      await archive.writeFile(
        `/gallery-manifest.json`,
        configContents(newWorks)
      );
      const artworkState = await this.props.loadArtwork();
      await this.props.setArtworkState(artworkState);

      this.setState({ newArtworkUrl: '' });
    } catch (error) {
      console.log('The following error occured', error);
    }
  };

  createGallery = async () => {
    const newGallery = await global.DatArchive.fork(DAT_URL, {
      title: 'Name of gallery – will show up at top of site',
      description: 'Description of gallery – will show up below title',
      prompt: true
    });

    await window.location.replace(newGallery.url);
  };

  render() {
    const { title, description, isOwner, isDat } = this.props;

    return (
      <Wrapper>
        <TitleContainer>
          <div>
            <H1>{title}</H1>
            <H2>{description}</H2>
          </div>
        </TitleContainer>
        <NavContainer>
          <div>
            <StyledLink to="info">/info</StyledLink>
            {isOwner && <StyledLink to="canvas">/canvas</StyledLink>}
          </div>
          <CreateContainer>
            {isDat ? (
              <div>
                <CreateButton onClick={this.createGallery}>
                  create your own pixel-gallery
                </CreateButton>
              </div>
            ) : (
              <div>
                <CreateButton disabled>
                  create your own pixel-gallery
                </CreateButton>
                <p style={{ textAlign: 'right' }}>
                  <small>
                    Read about{' '}
                    <a href="/info#GettingStarted">Getting Started</a>.
                  </small>
                </p>
              </div>
            )}

            {isOwner && (
              <AddWrapper>
                <AddTitle>Add artwork to your gallery</AddTitle>
                <AddInput
                  placeholder="dat://xxxxxxxxxxxxxxxxx/art/zzzz-zzzz-zzzz-zzzz.json"
                  value={this.state.newArtworkUrl}
                  onChange={e => this.updateNewArtworkUrl(e)}
                />
                <AddButton onClick={e => this.addArtwork(e)}>submit</AddButton>
              </AddWrapper>
            )}
          </CreateContainer>
        </NavContainer>
      </Wrapper>
    );
  }
}

export default Header;
