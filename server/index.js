const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const cors = require("cors");
const routes = require("./routes/usersRoute");

const app = express();
const port = process.env.PORT || 5002;

app.use(express.json());
app.use(cors());
app.use("/api", routes);

app.listen(port, () => console.log(`Listening ${port} port`));
