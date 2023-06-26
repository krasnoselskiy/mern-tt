import { React } from "react";
import { isEmpty } from "lodash";
import { arrayOf, shape, string, number } from "prop-types";

import { Icon } from "../Icon";
import { TableRow } from "../TableRow";

import styles from "./table.module.scss";

export const Table = ({ users }) => {
  return (
    <table cellSpacing="0" className={styles.table}>
      <thead>
        <tr>
          <th>
            <div className={styles.table_head_content}>
              <Icon name="Location" />
              <span className={styles.table_head_text}>
                Request source (IP)
              </span>
            </div>
          </th>
          <th>
            <div className={styles.table_head_content}>
              <Icon name="Person" />
              <span className={styles.table_head_text}>Client</span>
            </div>
          </th>
          <th>
            <div className={styles.table_head_content}>
              <Icon name="Calendar" />
              <span className={styles.table_head_text}> Date / Time</span>
            </div>
          </th>
          <th>
            <div className={styles.table_head_content}>
              <Icon name="ListBox" />
              <span className={styles.table_head_text}>Count</span>
            </div>
          </th>
        </tr>
      </thead>

      <tbody>
        {!isEmpty(users) &&
          users.map((user, index) => {
            let isShowIp = true;
            if (index > 0 && users[index]?.ip === users[index - 1]?.ip) {
              isShowIp = false;
            }

            return <TableRow key={user.id} user={user} isShowIp={isShowIp} />;
          })}

        {isEmpty(users) && (
          <tr>
            <td className={styles.table_text}>No data</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  users: arrayOf(
    shape({
      id: string,
      ip: string,
      client: string,
      date: string,
      count: number,
    })
  ),
};

Table.defaultProps = {
  users: [],
};
