const { v4: uuidv4 } = require("uuid");

let mockedData = [
  {
    id: uuidv4(),
    ip: "192.168.1.1",
    client: "Edge",
    date: new Date(),
    count: 1,
  },
  {
    id: uuidv4(),
    ip: "192.168.1.1",
    client: "Chrome",
    date: new Date(),
    count: 2,
  },
  {
    id: uuidv4(),
    ip: "192.168.1.1",
    client: "Firefox",
    date: new Date(),
    count: 1,
  },
  {
    id: uuidv4(),
    ip: "127.0.0.1",
    client: "Chrome",
    date: new Date(),
    count: 3,
  },
  {
    id: uuidv4(),
    ip: "127.0.0.1",
    client: "Chrome",
    date: new Date(),
    count: 2,
  },
];

const getUserData = async (req, res) => {
  res.send(mockedData);
  res.status(200);
};

const addUserData = async (req, res) => {
  try {
    const { ip, client } = req.body;

    mockedData.push({ ip, client, id: uuidv4(), date: new Date(), count: 1 });

    res.send(mockedData);
    res.status(200);
  } catch (error) {
    res.send(error);
    res.status(500);
  }
};

const clearUserData = async (req, res) => {
  try {
    mockedData = [];

    res.send(mockedData);
    res.status(200);
  } catch (error) {
    res.send(error);
    res.status(500);
  }
};

module.exports = {
  getUserData,
  clearUserData,
  addUserData,
};
