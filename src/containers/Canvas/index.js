import React from 'react';
import ArtworkGrid from '../../components/ArtworkGrid';
import { SwatchesPicker } from 'react-color';
import { Wrapper, Container } from './styles';

const Canvas = () => (
  <Wrapper>
    <Container>
      <div>
        <ArtworkGrid />
      </div>

      <SwatchesPicker />
    </Container>
  </Wrapper>
);

export default Canvas;
