const db = require("../db/dbConfig.js");

// GET ALL Raffles
const getAllRaffles = async () => {
    const allRaffles = await db.any("SELECT * FROM raffles");
    return allRaffles;
};

// GET ONE Raffle
const getOneRaffle = async (id) => {
    const oneRaffle = await db.oneOrNone("SELECT * FROM raffles WHERE id = $1", id)
    return oneRaffle
}

// POST ONE Raffle
const createRaffle = async (raffle) => {
    const {raffle_name, secret_token} = raffle
    const newRaffle = await db.oneOrNone("INSERT INTO raffles (raffle_name, secret_token) VALUES ($1, $2) RETURNING *;",[raffle_name, secret_token])
    return newRaffle
}

// GET ALL Participants for one raffle

const getOneRaffleWithAllParticipants = async (id) => {
    const oneRaffleWithAllParticipants = await db.any(
        "SELECT * FROM participants JOIN joined_raffle ON participants.id = joined_raffle.participant_id WHERE joined_raffle.raffle_id = $1", id)
    return oneRaffleWithAllParticipants
}

module.exports = {
  getAllRaffles,
  getOneRaffle,
  createRaffle,
  getOneRaffleWithAllParticipants
};