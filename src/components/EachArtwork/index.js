import React from 'react';
import { Wrapper, Container, Button } from './styles';
import ArtworkGrid from '../ArtworkGrid';

import URL from 'url-parse';
import ArtistInfo from '../ArtistInfo';
import AddToGallery from '../AddToGallery';
import { ArtworkDescription } from '../ArtistInfo/styles';

class EachArtwork extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      addToGalleryOpen: false,
      artworkCopied: false
    };
  }

  flipGalleryOpen = () => {
    this.setState(prevState => {
      return {
        addToGalleryOpen: !prevState.addToGalleryOpen
      };
    });
  };

  artworkCopyFn = () => {
    this.setState({
      artworkCopied: true
    });
  };

  render() {
    const {
      imageDescription,
      artist,
      copyright,
      dateTime,
      software,
      userComment,
      pixels,
      isOwner,
      removeFn
    } = this.props;

    return (
      <Wrapper>
        <Container>
          <ArtworkGrid pixels={pixels} />
        </Container>

        <ArtistInfo
          artist={artist}
          imageDescription={imageDescription}
          dateTime={dateTime}
          copyright={copyright}
          userComment={userComment}
        />

        <div style={{ display: 'flex' }}>
          <AddToGallery
            software={software}
            addToGalleryOpen={this.state.addToGalleryOpen}
            flipGalleryOpen={this.flipGalleryOpen}
            artworkCopied={this.state.artworkCopied}
            copyFn={this.artworkCopyFn}
          />
          {isOwner && (
            <Button onClick={() => removeFn(URL(software).pathname)}>
              remove from gallery
            </Button>
          )}
        </div>
      </Wrapper>
    );
  }
}

export default EachArtwork;
