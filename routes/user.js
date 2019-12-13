const express = require("express");
const router = express.Router();

const users = [
  {
    _id: "123",
    username: "alice",
    password: "alice",
    firstName: "Alice",
    lastName: "Wonder",
    email: "alice@gmail.com"
  },
  {
    _id: "234",
    username: "bob",
    password: "bob",
    firstName: "Bob",
    lastName: "Marley",
    email: "bob@whatever.com"
  },
  {
    _id: "345",
    username: "charly",
    password: "charly",
    firstName: "Charly",
    lastName: "Garcia",
    email: "charly@ulem.com"
  },
  {
    _id: "456",
    username: "shiyu",
    password: "shiyu",
    firstName: "Shiyu",
    lastName: "Wang",
    email: "swang@ulem.org"
  }
];

// find user by credentials
router.get("/", (req, res) => {
  // get username and password
  const username = req.query.username;
  const password = req.query.password;
  let user;
  // if username and password are sent from client
  if (username && password) {
    for (let i = 0; i < users.length; i++) {
      // if user found with given username snd password
      if (users[i].username === username && users[i].password === password) {
        user = users[i];
      }
    }
  }
  // if user not exist
  if (!user) {
    user = null;
  }
  // send user back to client
  res.json(user);
});

module.exports = router;
