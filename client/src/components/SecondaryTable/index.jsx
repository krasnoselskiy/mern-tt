import { React } from "react";
import { number } from "prop-types";

import { Icon } from "../Icon";

import styles from "./secondary.module.scss";

export const SecondaryTable = ({ uniqUsers, uniqRequests }) => {
  return (
    <table cellSpacing="0" className={styles.table}>
      <tbody>
        <tr>
          <td>
            <div className={styles.table_td}>
              <Icon name="Location" />
              <span className={styles.table_head_text}>Total requests</span>
            </div>
          </td>
          <td>{uniqUsers}</td>
        </tr>
        <tr>
          <td>
            <div className={styles.table_td}>
              <Icon name="Location" />
              <span className={styles.table_head_text}>
                Unique requests (IPs)
              </span>
            </div>
          </td>
          <td>{uniqRequests}</td>
        </tr>
      </tbody>
    </table>
  );
};

SecondaryTable.propTypes = {
  uniqUsers: number,
  uniqRequests: number,
};

SecondaryTable.defaultProps = {
  uniqUsers: 0,
  uniqRequests: 0,
};
