import React from "react";
import { Wrapper, Container } from "./styles";

const EachArtwork = ({
  imageDescription,
  artist,
  copyright,
  dateTime,
  software,
  userComment,
  pixels
}) => (
  <Wrapper>
    <Container>
      art here (pxif.pixels logging)
      {console.log(pixels)}
    </Container>
    <div>
      <p>Title: {imageDescription}</p>
      <p>
        Link to this piece: <a href="#">dat://yyyyyyyyyyyyy#this</a>
      </p>
      <p>
        Gallery code: <a href="#">dat://xxxxxxxxxxx/art/zzzzz.json</a>
      </p>
    </div>
  </Wrapper>
);

export default EachArtwork;
