import React from 'react';
import Header from '../../components/Header';
import ArtworkList from '../../components/ArtworkList';

const Gallery = ({ title, description, artwork }) => (
  <div>
    <Header title={title} description={description} />
    <ArtworkList artwork={artwork} />
  </div>
);

export default Gallery;
