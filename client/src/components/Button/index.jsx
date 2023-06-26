import { React } from "react";
import { func } from "prop-types";

import styles from "./button.module.scss";

export const Button = ({ handleClick }) => {
  return (
    <button className={styles.btn} onClick={handleClick}>
      Reset
    </button>
  );
};

Button.propTypes = {
  handleClick: func.isRequired,
};
