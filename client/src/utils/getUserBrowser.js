import { BROWSERS } from "./constants";

export const getUserBrowser = () => {
  let browserName = null;
  const { userAgent } = navigator;

  if (userAgent.indexOf(BROWSERS.NAMES.FIREFOX) > -1) {
    browserName = BROWSERS.NAMES.FIREFOX;
  } else if (userAgent.indexOf(BROWSERS.NAMES.OPERA) > -1) {
    browserName = BROWSERS.NAMES.OPERA;
  } else if (userAgent.indexOf(BROWSERS.NAMES.EDGE) > -1) {
    browserName = BROWSERS.NAMES.EDGE;
  } else if (userAgent.indexOf(BROWSERS.NAMES.CHROME) > -1) {
    browserName = BROWSERS.NAMES.CHROME;
  } else if (userAgent.indexOf(BROWSERS.NAMES.SAFARI) > -1) {
    browserName = BROWSERS.NAMES.SAFARI;
  } else {
    browserName = "unknown";
  }

  return browserName;
};
