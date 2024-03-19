const {
  queryListAnimals,
  queryTypes,
  queryByType,
  querySingleAnimal,
} = require("../service/requests");
//const HttpError = require("../helpers/HttpError");

const getLimitedAnimals = async (req, res) => {
  const pets = await queryListAnimals();
  const limitedPets = {};

  for (const [key, value] of Object.entries(pets)) {
    limitedPets[key] = value.slice(0, 3);
  }
  res.json(limitedPets);
};

const getAllTypes = async (req, res) => {
  const result = await queryTypes();

  res.json(result);
};

const getAnimalsByType = async (req, res, next) => {
  try {
    const type = req.params.pet_type;

    const animalsArrByType = await queryByType(type);
    if (!animalsArrByType) {
      throw { status: 404, message: "Not found" };
    }
    res.json(animalsArrByType);
  } catch (error) {
    next(error);
  }
};
const getSingleAnimal = async (req, res, next) => {
  try {
    let animalType = req.params.pet_type;
    let animalId = req.params.pet_id;
    const animal = await querySingleAnimal(animalType, animalId);
    if (!animal) {
      throw { status: 404, message: "Not found" };
    }
    res.json(animal);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getLimitedAnimals,
  getAllTypes,
  getAnimalsByType,
  getSingleAnimal,
};
