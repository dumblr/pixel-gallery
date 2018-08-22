import { DAT_URL } from "../config";
const urlEnv = () => {
  if (process.env.NODE_ENV === "development") {
    return DAT_URL;
  }
  return window.location.toString();
};

export default urlEnv;
