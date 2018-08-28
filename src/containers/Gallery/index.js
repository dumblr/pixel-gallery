import React, { Fragment } from 'react';
import Header from '../../components/Header';
import ArtworkList from '../../components/ArtworkList';

const Gallery = ({ title, description, artwork }) => (
  <Fragment>
    {console.log(artwork)}
    <Header title={title} description={description} />
    <ArtworkList artwork={artwork} />
  </Fragment>
);

export default Gallery;
