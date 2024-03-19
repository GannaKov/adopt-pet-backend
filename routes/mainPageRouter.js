const express = require("express");
const { getLimitedAnimals } = require("../controllers/animals");

mainPageRouter = express.Router();

mainPageRouter.get("/", getLimitedAnimals);

module.exports = mainPageRouter;
