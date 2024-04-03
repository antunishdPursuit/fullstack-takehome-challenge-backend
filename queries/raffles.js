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

module.exports = {
  getAllRaffles,
  getOneRaffle
};