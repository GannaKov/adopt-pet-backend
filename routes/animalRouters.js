const express = require("express");
const {
  getAllTypes,
  getAllAnimals,
  getAnimalsByType,
  getSingleAnimal,
} = require("../controllers/animals");

animalRouter = express.Router();

animalRouter.get("/", getAllTypes);

animalRouter.get("/animals", getAllAnimals);

animalRouter.get("/animals/:pet_type", getAnimalsByType);

animalRouter.get("/animals/:pet_type/:pet_id", getSingleAnimal);

module.exports = animalRouter;
