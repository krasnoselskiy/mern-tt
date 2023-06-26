import { React, useEffect, useState } from "react";
import { sortBy, isEmpty, groupBy } from "lodash";

import { axiosInstance } from "./utils/axiosInstance";
import { handleReset, handleUserAdd } from "./utils/API";
import { getUserIP } from "./utils/getUserIP";
import { getUserBrowser } from "./utils/getUserBrowser";

import { Table } from "./components/Table";
import { Button } from "./components/Button";

import "./App.scss";
import { SecondaryTable } from "./components/SecondaryTable";

export const App = () => {
  const [userIp, setUserIp] = useState(null);
  const [userBrowser, setUserBrowser] = useState(null);
  const [users, setUsers] = useState([]);
  const [uniqUsers, setUniqUsers] = useState(0);
  const [uniqRequests, setUniqRequests] = useState(0);

  const removeUsers = () => {
    setUsers([]);
    setUniqUsers(0);
    setUniqRequests(0);
    handleReset();
  };

  useEffect(() => {
    const getUsersData = async () => {
      const ip = await getUserIP();
      const browser = getUserBrowser();
      const { data } = await axiosInstance("users");
      const sortedUsers = sortBy(data, "ip");
      const groupedUsers = groupBy(data, "ip");
      const requests = data.reduce(
        (accumulator, currentValue) => accumulator + currentValue?.count,
        0
      );

      setUniqUsers(requests);
      setUniqRequests(Object.entries(groupedUsers).length);
      setUsers(sortedUsers);
      setUserIp(ip);
      setUserBrowser(browser);
    };

    getUsersData();
  }, []);

  useEffect(() => {
    if (!isEmpty(userIp) && !isEmpty(userBrowser)) {
      handleUserAdd(userIp, userBrowser);
    }
  }, [userIp, userBrowser]);

  return (
    <div className="app-wrapper">
      <Table users={users} />
      <SecondaryTable uniqUsers={uniqUsers} uniqRequests={uniqRequests} />
      <Button handleClick={removeUsers} />
    </div>
  );
};
