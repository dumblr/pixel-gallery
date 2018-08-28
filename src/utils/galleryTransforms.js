const width = 16;

export const getCellNumber = (x, y) => {
  return x + y * width;
};

export const getGridCoordinates = (cellNumber, color) => {
  const x = cellNumber % width;
  const y = Math.floor(cellNumber / width);
  return {
    x,
    y,
    color
  };
};
