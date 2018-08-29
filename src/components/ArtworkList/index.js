import React, { Fragment } from 'react';
import EachArtwork from '../EachArtwork';

const ArtworkList = ({ artwork }) => (
  <Fragment>
    {artwork &&
      artwork.map((art, i) => (
        <EachArtwork
          key={i}
          imageDescription={art.exif.imageDescription}
          artist={art.exif.artist}
          copyright={art.exif.copyright}
          dateTime={art.exif.dateTime}
          software={art.exif.software}
          userComment={art.exif.userComment}
          pixels={art.pxif.pixels}
        />
      ))}
  </Fragment>
);

export default ArtworkList;
