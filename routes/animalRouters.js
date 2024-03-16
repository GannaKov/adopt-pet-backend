const express = require("express");
const {
  getAllTypes,
  getAllAnimals,
  getAnimalsByType,
} = require("../controllers/animals");

animalRouter = express.Router();

animalRouter.get("/", getAllTypes);

animalRouter.get("/animals", getAllAnimals);

animalRouter.get("/animals/:pet_type", getAnimalsByType);

animalRouter.get("/animals/:pet_type/:pet_id", (req, res, next) => {
  let animalType = req.params.pet_type;
  let animalId = req.params.pet_id;
  console.log("params", req.params);
  res.send(`Hello here ${animalType} animal ${animalId}!`);
});

module.exports = animalRouter;
