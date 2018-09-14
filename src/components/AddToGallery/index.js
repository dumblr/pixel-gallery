import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Wrapper, Container, Button, Text, Input, Span } from './styles';
import { Link } from '@reach/router';

const AddToGallery = ({
  software,
  flipGalleryOpen,
  addToGalleryOpen,
  artworkCopied,
  copyFn
}) => (
  <Wrapper>
    <Button onClick={() => flipGalleryOpen()} opened={addToGalleryOpen}>
      Add to your gallery ↓
    </Button>
    <Container opened={addToGalleryOpen}>
      <Text>
        Copy and paste the artwork address into the 'Add Artwork' form on your
        gallery.
      </Text>
      <div>
        <Input readOnly value={software} onClick={e => e.target.select()} />
        <CopyToClipboard text={software} onCopy={() => copyFn()}>
          <Button>Copy</Button>
        </CopyToClipboard>
        <Span>{artworkCopied ? 'Copied.' : null}</Span>
      </div>

      <Text>
        More instructions <Link to="instructions">here</Link>.
      </Text>
    </Container>
  </Wrapper>
);

export default AddToGallery;
