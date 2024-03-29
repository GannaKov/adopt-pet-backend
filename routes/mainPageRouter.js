const express = require("express");

const { getLimitedAnimals } = require("../controllers/mainPage");

mainPageRouter = express.Router();

mainPageRouter.get("/", getLimitedAnimals);

module.exports = mainPageRouter;
