const express = require("express");
const cors = require("cors");

/* eslint-disable no-console */

const port = 3001;
const app = express();
app.use(cors());

app.get("/users", function(req, res) {
  // Hard coding for simplicity. Pretend this hits a real database
  res.json([
    { id: 1, firstName: "Bob", lastName: "Smith", email: "bob@gmail.com" },
    { id: 2, firstName: "Tina", lastName: "Lee", email: "lee.tina@hotmail.com" }
  ]);
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  }
  console.log(`Running on port ${port}.`);
});
