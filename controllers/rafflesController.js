const express = require("express");
const raffles = express.Router();
const {
  getAllRaffles,
  getOneRaffle,
  createRaffle,
} = require("../queries/raffles.js");

// GET all raffles /api/raffles
raffles.get("/", async (req, res) => {
    try {
        const allraffles = await getAllRaffles();
            res.status(404).json({ data: allraffles });
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
});

// GET one raffles /api/raffles/:id
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
});

// POST one Raffle /api/raffles
raffles.post('/', async (req, res) => {
    try {
        const createdRaffle = await createRaffle(req.body)
        res.status(200).json(createdRaffle);
    } catch (error) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = raffles;