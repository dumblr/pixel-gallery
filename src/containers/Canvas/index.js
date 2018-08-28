import React from 'react';
import ArtworkGrid from '../../components/ArtworkGrid';
import { SwatchesPicker as ColorPicker } from 'react-color';
import { Wrapper, Container } from './styles';

const Canvas = () => (
  <Wrapper>
    <Container>
      <div>
        <ArtworkGrid />
      </div>

      <ColorPicker height={'100%'} />
    </Container>
  </Wrapper>
);

export default Canvas;
