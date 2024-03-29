const express = require("express");
const {
  getAllTypes,
  getAnimalsByType,
  getSingleAnimal,
} = require("../controllers/animals");

animalRouter = express.Router();

animalRouter.get("/", getAllTypes);

animalRouter.get("/:pet_type", getAnimalsByType);

animalRouter.get("/:pet_type/:pet_id", getSingleAnimal);

module.exports = animalRouter;
