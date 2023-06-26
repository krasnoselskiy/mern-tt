import React from "react";
import { string } from "prop-types";

import { CalendarIcon } from "../icons/Calendar";
import { LocationIcon } from "../icons/Location";
import { ListBoxIcon } from "../icons/ListBox";
import { PersonIcon } from "../icons/Person";

import styles from "./icon.module.scss";

const getIcon = (name) => {
  switch (name) {
    case "Calendar":
      return <CalendarIcon />;
    case "ListBox":
      return <ListBoxIcon />;
    case "Location":
      return <LocationIcon />;
    case "Person":
      return <PersonIcon />;

    default:
      return <CalendarIcon />;
  }
};

export const Icon = ({ name }) => {
  return <div className={styles.icon_wrap}>{getIcon(name)}</div>;
};

Icon.propTypes = {
  name: string,
};

Icon.defaultProps = {
  name: "Calendar",
};
