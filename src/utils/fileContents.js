const fileContents = (
  software,
  artist,
  imageDescription,
  userComment,
  copyright,
  pixels
) =>
  JSON.stringify({
    exif: {
      software,
      artist,
      imageDescription,
      userComment,
      copyright,
      dateTime: new Date()
    },
    pxif: {
      pixels
    }
  });

export default fileContents;
