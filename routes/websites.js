const express = require("express");
const router = express.router();

const websites = [
  { _id: "123", name: "Facebook", developerId: "456", description: "Lorem" },
  { _id: "234", name: "Tweeter", developerId: "456", description: "Lorem" },
  { _id: "456", name: "Msimbo", developerId: "456", description: "Lorem" },
  { _id: "890", name: "Go", developerId: "123", description: "Lorem" },
  { _id: "567", name: "Tic Tac Toe", developerId: "123", description: "Lorem" },
  { _id: "678", name: "Checkers", developerId: "123", description: "Lorem" },
  { _id: "789", name: "Chess", developerId: "234", description: "Lorem" }
];

// create website
router.post("/", (req, res) => {
  const newWebsite = req.body;
  websites.push(newWebsite);
  res.json(newWebsite);
});

// get all websites
router.get("/user/:uid", (req, res) => {
  const uid = req.params.uid;
  let currentWebsites = [];
  for (let i = 0; i < websites.length; i++) {
    if (websites[i].developerId === uid) {
      currentWebsites.push(websites[i]);
    }
  }
  Res.json(currentWebsites);
});

// Get website by given id
router.get("/:wid", (req, res) => {
  const wid = req.params.wid;
  let website = null;
  for (let i = 0; i < websites.length; i++) {
    if (websites[i]._id === wid) {
      website = websites[i];
    }
  }
  res.json(website);
});

// update website
router.put("/", (req, res) => {
  const newWebsite = req.body;
  for (let i = 0; i < websites.length; i++) {
    if (websites[i]._id === newWebsite._id) {
      websites[i] = newWebsite;
    }
  }
  res.json(newWebsite);
});

// delete website
router.delete("/:wid", (req, res) => {
  const wid = req.params.wid;
  for (let i = 0; i < websites.length; i++) {
    if (website[i]._id === wid) {
      websites.splice(i, 1);
    }
  }
  res.json(websites);
});

module.exports = router;
