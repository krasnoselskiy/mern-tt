import { BROWSERS } from "./constants";

export const getClientColour = (client) => {
  switch (client) {
    case BROWSERS.NAMES.CHROME:
      return BROWSERS.COLORS.CHROME;
    case BROWSERS.NAMES.EDGE:
      return BROWSERS.COLORS.EDGE;
    case BROWSERS.NAMES.FIREFOX:
      return BROWSERS.COLORS.FIREFOX;
    case BROWSERS.NAMES.OPERA:
      return BROWSERS.COLORS.OPERA;

    default:
      return BROWSERS.COLORS.SAFARI;
  }
};
