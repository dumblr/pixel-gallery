import React from 'react';
import styled from 'styled-components';
import gridBgColor from '../../utils/gridBgColor';
import { getCellNumber } from '../../utils/galleryTransforms';
import union from 'lodash.union';

const Block = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${props =>
    props.color ? props.color : gridBgColor(props.helper, props.i)};
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ArtworkGrid = ({ pixels }) => {
  const canvas = Array.from(Array(256));
  canvas.fill({ color: null });

  pixels.forEach(p => {
    const counter = getCellNumber(p.x, p.y);

    canvas.fill({ color: p.color }, counter, counter + 1);
  });

  return (
    <Grid>
      {console.log('canvas', canvas)}
      {canvas.map((pixel, i) => (
        <Block key={i} color={pixel.color || 'white'}>
          {i}
        </Block>
      ))}
    </Grid>
  );
};
// lol this is hilarious inefficient

export default ArtworkGrid;
