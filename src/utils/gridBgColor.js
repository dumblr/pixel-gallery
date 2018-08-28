const gridBgColor = (helper, i) => {
  if (helper % 2 === 0) {
    if (i % 2 === 0) {
      return 'rgba(255,255,255,1)';
    }
    return 'rgba(142, 144, 147, 0.2)';
  }
  if (i % 2 === 0) {
    return 'rgba(142, 144, 147, 0.2)';
  }
  return 'rgba(255,255,255,1)';
};

export default gridBgColor;
