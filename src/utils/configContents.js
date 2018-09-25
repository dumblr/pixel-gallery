const configContents = works => {
  console.log('works', works);
  return JSON.stringify({
    works: works
  });
};

export default configContents;
