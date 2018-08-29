import React from 'react';
import { Wrapper, Container } from './styles';
import ArtworkGrid from '../ArtworkGrid';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import URL from 'url-parse';

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
    <div>
      {imageDescription && <p>{imageDescription}</p>}
      {artist ? <p>by {artist}</p> : <p>by unknown artist</p>}
      {copyright && <p>{copyright}</p>}
      <p>{dateTime}</p>
      <p>{userComment}</p>

      <CopyToClipboard text={software}>
        <button>copy gallery code to clipboard</button>
      </CopyToClipboard>

      {isOwner && (
        <button onClick={() => removeFn(URL(software).pathname)}>
          remove from gallery
        </button>
      )}
    </div>
  </Wrapper>
);

export default EachArtwork;
