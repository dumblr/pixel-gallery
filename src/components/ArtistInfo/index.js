import React from 'react';
import {
  Wrapper,
  ArtistName,
  ArtworkTitle,
  ArtworkMedium,
  ArtworkDescription,
  ArtworkCopyright
} from './styles';
import dayjs from 'dayjs';

const ArtistInfo = ({
  artist,
  imageDescription,
  dateTime,
  copyright,
  userComment
}) => (
  <Wrapper>
    <ArtistName>{artist ? artist : 'Unknown Artist'}</ArtistName>

    <ArtworkTitle>
      {imageDescription ? imageDescription : 'Untitled'},{' '}
      <span>{dayjs(dateTime).format('YYYY')}</span>
    </ArtworkTitle>

    <ArtworkMedium>Pixel art on 16x16 grid</ArtworkMedium>
    {userComment && <ArtworkDescription>{userComment}</ArtworkDescription>}
    {copyright && <ArtworkCopyright>{copyright}</ArtworkCopyright>}
  </Wrapper>
);

export default ArtistInfo;
