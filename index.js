const express = require("express");
const app = express();

require("dotenv").config();

app.use(express.json());

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});

const { dbConnect } = require("./config/database");

dbConnect();

app.get("/", (req, res) => {
  res.send(`<h2>Garv is here</h2>`);
});
