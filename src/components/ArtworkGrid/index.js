import React from "react";
// 800px x 450px

const bgColor = (helper, i) => {
  if (helper % 2 === 0) {
    if (i % 2 === 0) {
      return "rgba(142, 144, 147, 0.600)";
    }
    return "rgba(142, 144, 147, 0.2)";
  }
  if (i % 2 === 0) {
    return "rgba(142, 144, 147, 0.2)";
  }
  return "rgba(142, 144, 147, 0.600)";
};

const Blocks = ({ helper }) =>
  Array.from(Array(80)).map((x, i) => (
    <div
      name={x}
      key={i}
      style={{
        width: "10px",
        height: "10px",
        backgroundColor: bgColor(helper, i)
      }}
    />
  ));

const ArtRow = ({ helper }) => (
  <div style={{ display: "flex" }}>
    <Blocks helper={helper} />
  </div>
);

const ArtworkGrid = () =>
  Array.from(Array(45)).map((x, i) => <ArtRow name={x} key={i} helper={i} />);

export default ArtworkGrid;
