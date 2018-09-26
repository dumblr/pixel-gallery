import { DAT_URL } from '../config';

export const urlEnv = () => {
  if (process.env.NODE_ENV === 'development') {
    return DAT_URL;
  }
  return window.location.toString();
};

export const configEnv = () => {
  if (process.env.NODE_ENV === 'development') {
    return `dat://${DAT_URL}`;
  }
  return window.location.toString();
};
