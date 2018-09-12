import React, { Fragment } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Wrapper, Button } from './styles';
import { Link } from '@reach/router';

const AddToGallery = ({
  software,
  isBeaker,
  flipGalleryOpen,
  addToGalleryOpen
}) => (
  <Fragment>
    <Button onClick={() => flipGalleryOpen()}>Add to your gallery ↓</Button>
    <Wrapper opened={addToGalleryOpen}>
      <p>
        Copy and paste the artwork address into the 'Add Artwork' form on your
        gallery
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
  </Fragment>
);

export default AddToGallery;
