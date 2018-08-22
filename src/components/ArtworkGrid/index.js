import React from "react";
import styled from "styled-components";
// 800px x 450px

const bgColor = (helper, i) => {
  if (helper % 2 === 0) {
    if (i % 2 === 0) {
      return "rgba(255,255,255,1)";
    }
    return "rgba(142, 144, 147, 0.2)";
  }
  if (i % 2 === 0) {
    return "rgba(142, 144, 147, 0.2)";
  }
  return "rgba(255,255,255,1)";
};

const Block = styled.div`
  width: 10px;
  height: 10px;
  background-color: ${props => bgColor(props.helper, props.i)};
`;

const Row = styled.div`
  display: flex;
`;

const Blocks = ({ helper }) =>
  Array.from(Array(80)).map((x, i) => (
    <Block key={i} name={x} helper={helper} i={i} />
  ));

const ArtRow = ({ helper }) => (
  <Row>
    <Blocks helper={helper} />
  </Row>
);

const ArtworkGrid = () =>
  Array.from(Array(45)).map((x, i) => <ArtRow name={x} key={i} helper={i} />);

// lol this is hilarious inefficient

export default ArtworkGrid;
