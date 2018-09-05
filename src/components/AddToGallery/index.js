import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Wrapper } from './styles';
import { Link } from '@reach/router';

const AddToGallery = ({ software, isBeaker }) => (
  <Wrapper>
    <p>
      Want to include this in your gallery? Copy the artwork address and paste
      it into the 'Add Artwork' form on your Pixel Gallery
    </p>
    <div>
      <input readOnly value={software} onClick={e => e.target.select()} />
      <CopyToClipboard text={software}>
        <button>Copy</button>
      </CopyToClipboard>
    </div>

    <p>
      More instructions <Link to="instructions">here</Link>.
    </p>
  </Wrapper>
);

export default AddToGallery;
