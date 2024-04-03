const db = require("../db/dbConfig.js");

// GET ALL Raffles
const getAllRaffles = async () => {
    const allRaffles = await db.any("SELECT * FROM raffles");
    return allRaffles;
};

module.exports = {
  getAllRaffles
};