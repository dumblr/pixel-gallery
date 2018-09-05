import React from 'react';
import { Wrapper, Container } from './styles';
import ArtworkGrid from '../ArtworkGrid';

import URL from 'url-parse';
import ArtistInfo from '../ArtistInfo';
import AddToGallery from '../AddToGallery';

const EachArtwork = ({
  imageDescription,
  artist,
  copyright,
  dateTime,
  software,
  userComment,
  pixels,
  isOwner,
  removeFn
}) => (
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

    <AddToGallery software={software} />

    {isOwner && (
      <button onClick={() => removeFn(URL(software).pathname)}>
        remove from gallery
      </button>
    )}
  </Wrapper>
);

export default EachArtwork;
