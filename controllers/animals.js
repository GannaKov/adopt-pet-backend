// const {} = require("../service/requests");

const { PetType, Pet } = require("../models/animals");

//get all types
const getTypes = async () => {
  const types = await PetType.find();
  const typesArray = types.map((obj) => obj.type);

  return typesArray;
};

const getAllTypes = async (req, res, next) => {
  try {
    const result = await getTypes();
    if (result.length === 0) {
      throw { status: 404, message: "Not found pets" };
    }

    res.status(200).json({
      status: "success",
      code: 200,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

//get by type
const getAnimalsByType = async (req, res, next) => {
  try {
    const type = req.params.pet_type;
    const animalsArrByType = await Pet.find({ type });

    if (animalsArrByType.length === 0) {
      throw {
        status: 404,
        message: `Pets ${type}  not found`,
      };
    }

    res.status(200).json({
      status: "success",
      code: 200,
      data: animalsArrByType,
    });
  } catch (error) {
    next(error);
  }
};
//get by type and id
const getSingleAnimal = async (req, res, next) => {
  try {
    let animalType = req.params.pet_type;
    let animalId = req.params.pet_id;
    const animal = await Pet.findOne({ type: animalType, id: animalId });
    if (!animal) {
      throw {
        status: 404,
        message: `Pet ${animalType} with id ${animalId} not found`,
      };
    }

    res.status(200).json({
      status: "success",
      code: 200,
      data: animal,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllTypes,
  getAnimalsByType,
  getSingleAnimal,
  getTypes,
};
