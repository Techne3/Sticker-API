const express = require("express");

const router = express.Router();
const queries = require("../db/queries");

router.get("/", (req, res) => {
  queries.getAll().then((stick) => {
    res.json(stick);
  });
});

module.exports = router;
