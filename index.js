const express = require("express");
const app = express();
const port = 3000;

const userData = {
  name: "abcd",
  age: 21,
  hobby: "cricket",
};

const todoData = [
  {
    id: 123,
    item: "eat food",
  },
  {
    id: 124,
    item: "sleep",
  },
  {
    id: 125,
    item: "code",
  },
];

app.get("/", (req, res) => {
  res.send(userData);
});

app.get("/home", (req, res) => {
  res.send("this is home page 123 567");
});

app.get("/todo", (req, res) => {
  res.send(todoData);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
