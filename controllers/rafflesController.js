const express = require("express");
const raffles = express.Router();
const {
  getAllRaffles,
  getOneRaffle,
} = require("../queries/raffles.js");

// GET all raffles /raffles
raffles.get("/", async (req, res) => {
    try {
        const allraffles = await getAllRaffles();
        if (allraffles[0]) {
            res.status(200).json(allraffles);
        } else {
            res.status(404).json({ data: "No raffles" });
        }
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
});

// GET one raffles /raffles/:id
raffles.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const oneRaffle = await getOneRaffle(Number(id));
        if (oneRaffle) {
            res.status(200).json(oneRaffle);
        } else {
            res.status(404).json({ data: `No raffle with id ${id}` });
        }
    } catch (error) {
        res.status(500).json({ error: err.message });
    }
})

module.exports = raffles;