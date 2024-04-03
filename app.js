// DEPENDENCIES
const cors = require("cors");
const express = require("express");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROUTES
app.get("/", (req, res) => {
  res.send({Data: "Service is Running"});
});

// movies ROUTES
const rafflesController = require("./controllers/rafflesController");
app.use("/raffles", rafflesController);

// EXPORT
module.exports = app;