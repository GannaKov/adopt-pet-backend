const express = require("express");

animalRouter = express.Router();

animalRouter.get("/", (req, res, next) => {
  res.send("Hello here types!");
});

animalRouter.get("/animals", (req, res, next) => {
  res.send("Hello here all animals!");
});

animalRouter.get("/animals/:pet_type", (req, res, next) => {
  let animalType = req.params.pet_type;
  res.send(`Hello here ${animalType} animals!`);
});

animalRouter.get("/animals/:pet_type/:pet_id", (req, res, next) => {
  let animalType = req.params.pet_type;
  let animalId = req.params.pet_id;
  console.log("params", req.params);
  res.send(`Hello here ${animalType} animal ${animalId}!`);
});

module.exports = animalRouter;
