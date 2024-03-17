const {
  listAnimals,
  getTypes,
  getByType,
  singleAnimal,
} = require("../service/requests");
//const HttpError = require("../helpers/HttpError");

const getAllAnimals = async (req, res) => {
  const result = await listAnimals();

  res.json(result);
};

const getAllTypes = async (req, res) => {
  const result = await getTypes();

  res.json(result);
};

const getAnimalsByType = async (req, res, next) => {
  try {
    const type = req.params.pet_type;

    const animalsArrByType = await getByType(type);
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
    const animal = await singleAnimal(animalType, animalId);
    if (!animal) {
      throw { status: 404, message: "Not found" };
    }
    res.json(animal);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllAnimals,
  getAllTypes,
  getAnimalsByType,
  getSingleAnimal,
};
