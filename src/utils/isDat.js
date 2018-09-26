import { urlEnv } from './urlEnv';

const isDat = async () => {
  try {
    await new global.DatArchive(urlEnv());
    return true;
  } catch (error) {
    console.log('Dat not available');
    return false;
  }
};

export default isDat;
