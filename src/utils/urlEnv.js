import { DAT_URL } from '../config';

export const urlEnv = () => {
  if (process.env.NODE_ENV === 'development') {
    return DAT_URL;
  }
  return window.location.toString();
};

export const configEnv = windowLoc => {
  if (process.env.NODE_ENV === 'development' && !windowLoc) {
    return `dat://${DAT_URL}`;
  }
  return window.location.toString();
};
