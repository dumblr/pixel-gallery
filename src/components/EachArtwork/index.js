import React from 'react';
import { Wrapper, Container } from './styles';
import ArtworkGrid from '../ArtworkGrid';

const EachArtwork = ({
  imageDescription,
  artist,
  copyright,
  dateTime,
  software,
  userComment,
  pixels
}) => (
  <Wrapper>
    <Container>
      <ArtworkGrid pixels={pixels} />
    </Container>
    <div>
      <p>Title: {imageDescription}</p>
      <p>by {artist}</p>
      <p>{copyright}</p>
      <p>{dateTime}</p>
      <p>{software}</p>
      <p>{userComment}</p>
      <p>
        Link to this piece: <a href="#">dat://yyyyyyyyyyyyy#this</a>
      </p>
      <p>
        Gallery code: <a href="#">dat://xxxxxxxxxxx/art/zzzzz.json</a>
      </p>
    </div>
  </Wrapper>
);

export default EachArtwork;
