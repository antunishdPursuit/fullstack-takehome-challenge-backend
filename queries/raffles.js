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

// POST ONE Raffle, id parameter is the raffle id
const createParticipantForRaffle = async (raffle_id, participant) => {
    const {first_name, last_name, email, phone} = participant
    const newParticipant = await db.oneOrNone("INSERT INTO participants (first_name, last_name, email, phone) VALUES ($1, $2, $3, $4) RETURNING *;",
    [first_name, last_name, email, phone]
    )
    const newJoinedRaffle = await db.oneOrNone("INSERT INTO joined_raffle (raffle_id, participant_id) VALUES ($1, $2) RETURNING *;",
    [raffle_id, newParticipant.id])
    return newParticipant
}

// RETRIVIE A WINNER
const getRaffleWinner = async (id, token) => {
    const {secret_token, raffle_date} = token
    const raffleParticipants = await db.any("SELECT participants.id FROM participants JOIN joined_raffle ON participants.id = joined_raffle.participant_id JOIN raffles ON raffles.id = joined_raffle.raffle_id WHERE joined_raffle.raffle_id = $1;", id)
    const winner = Math.floor(Math.random() * raffleParticipants.length)
    const raffleWinner = await db.oneOrNone("UPDATE raffles SET winner_id = $1, raffle_date = $2 WHERE id = $3 AND secret_token = $4 RETURNING secret_token;", [raffleParticipants[winner].id, raffle_date, id, secret_token])
    return raffleWinner
}

const getWinnerOfRaffle = async(id) => {
    const raffleWinner = await db.oneOrNone("SELECT * FROM raffles JOIN  joined_raffle ON raffles.winner_id = joined_raffle.participant_id JOIN participants ON joined_raffle.participant_id = participants.id WHERE raffles.id = $1 AND joined_raffle.raffle_id = $1 ", id)
    return raffleWinner
}

module.exports = {
  getAllRaffles,
  getOneRaffle,
  createRaffle,
  getOneRaffleWithAllParticipants,
  createParticipantForRaffle,
  getRaffleWinner,
  getWinnerOfRaffle
};