import React from 'react';
import { Wrapper } from './styles';
import dayjs from 'dayjs';

const ArtistInfo = ({
  artist,
  imageDescription,
  dateTime,
  copyright,
  userComment
}) => (
  <Wrapper>
    <p>
      <strong>{artist ? artist : 'unknown artist'}</strong>
    </p>

    {imageDescription ? (
      <p>
        {imageDescription}, {dayjs(dateTime).format('YYYY')}
      </p>
    ) : (
      <p>Untitled, {dayjs(dateTime).format('YYYY')}</p>
    )}

    {copyright && <p>{copyright}</p>}
    {userComment && <p>{userComment}</p>}
  </Wrapper>
);

export default ArtistInfo;
