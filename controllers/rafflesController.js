const express = require("express");
const raffles = express.Router();
const {
  getAllRaffles,
} = require("../queries/raffles.js");

// INDEX
raffles.get("/", async (req, res) => {
    const allraffles = await getAllRaffles();
    if (allraffles[0]) {
      res.status(200).json(allraffles);
    } else {
      res.status(500).json({ error: "server error" });
    }
});


module.exports = raffles;