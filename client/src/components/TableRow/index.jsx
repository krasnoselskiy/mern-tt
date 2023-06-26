import React from "react";
import dayjs from "dayjs";
import { string } from "prop-types";
import { getClientColour } from "../../utils/getClientColour";

import styles from "./tableRow.module.scss";

export const TableRow = ({ user, isShowIp }) => {
  return (
    <tr>
      <td>{isShowIp && user.ip}</td>
      <td>
        <div className={styles.tableRow_clientWrap}>
          <div
            className={styles.tableRow_clientColour}
            style={{
              backgroundColor: getClientColour(user.client),
            }}
          ></div>
          {user.client}
        </div>
      </td>
      <td>
        <span className={styles.tableRow_date}>
          {dayjs(user.date).format("MMM D")}
        </span>
        <span className={styles.tableRow_divider}>/</span>
        <span className={styles.tableRow_time}>
          {dayjs(user.date).format("h:mm:ss")}
        </span>
      </td>
      <td>{user.count}</td>
    </tr>
  );
};

TableRow.propTypes = {
  id: string,
  client: string,
  date: string,
  count: string,
};

TableRow.defaultProps = {
  id: "",
  client: "",
  date: "",
  count: "",
};
