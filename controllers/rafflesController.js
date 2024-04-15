const express = require("express");
const raffles = express.Router();
const {
  getAllRaffles,
  getOneRaffle,
  createRaffle,
  getOneRaffleWithAllParticipants,
  createParticipantForRaffle,
  getRaffleWinner,
  getWinnerOfRaffle
} = require("../queries/raffles.js");

// GET all raffles /api/raffles
raffles.get("/", async (req, res) => {
    try {
        const allraffles = await getAllRaffles();
        res.status(200).json({ data: allraffles });
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
            res.status(200).json({ data: oneRaffle });
        } else {
            res.status(404).json({ data: `No raffle with id ${id}` });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// POST one Raffle /api/raffles
raffles.post('/', async (req, res) => {
    try {
        const createdRaffle = await createRaffle(req.body)
        res.status(200).json({ data: createdRaffle });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET one raffle with all participants /api/raffles/:id/participants
raffles.get('/:id/participants', async (req, res) => {
    try {
        const { id } = req.params;
        const oneRaffleWithAllParticipants = await getOneRaffleWithAllParticipants(Number(id));
        if (oneRaffleWithAllParticipants) {
            res.status(200).json(oneRaffleWithAllParticipants);
        } else {
            res.status(404).json({ data: `No raffle with id ${id}` });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// POST one participant for one raffle /api/raffles/:id/participants
raffles.post('/:id/participants', async (req, res) =>{
    try {
        const { id } = req.params;
        const participantForRaffle = await createParticipantForRaffle(Number(id), req.body);
        res.status(200).json({ data: participantForRaffle });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// PUT retivire a winner for the raffle
raffles.put("/:id/winner", async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id)
        console.log(req.body)
        const raffleWinner = await getRaffleWinner(Number(id), req.body)
        res.status(200).json({ data: raffleWinner });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
})

// GET the winner of a raffle
raffles.get("/:id/winner", async (req, res) => {
    try {
        const { id } = req.params;
        const raffleWinner = await getWinnerOfRaffle(Number(id))
        res.status(200).json({ data: raffleWinner });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
})

module.exports = raffles;