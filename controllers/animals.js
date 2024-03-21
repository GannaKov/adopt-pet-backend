const {
  queryTypes,
  queryByType,
  querySingleAnimal,
} = require("../service/requests");

const getAllTypes = async (req, res) => {
  const result = await queryTypes();

  // res.json(result);
  res.status(200).json({
    status: "success",
    code: 200,
    data: result,
  });
};

const getAnimalsByType = async (req, res, next) => {
  try {
    const type = req.params.pet_type;

    const animalsArrByType = await queryByType(type);
    if (!animalsArrByType) {
      throw { status: 404, message: "Not found" };
    }
    //res.json(animalsArrByType);
    res.status(200).json({
      status: "success",
      code: 200,
      data: animalsArrByType,
    });
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
    //res.json(animal);
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
};
