import React from 'react';
import { Wrapper } from './styles';

const ArtistInfo = ({
  artist,
  imageDescription,
  dateTime,
  copyright,
  userComment
}) => (
  <Wrapper>
    {artist ? (
      <p>
        <strong>{artist}</strong>
      </p>
    ) : (
      <p>
        <strong>unknown artist</strong>
      </p>
    )}
    {imageDescription ? (
      <p>
        {imageDescription}, {dateTime}
      </p>
    ) : (
      <p>Untitled, {dateTime}</p>
    )}

    {copyright && <p>{copyright}</p>}
    {userComment && <p>{userComment}</p>}
  </Wrapper>
);

export default ArtistInfo;
