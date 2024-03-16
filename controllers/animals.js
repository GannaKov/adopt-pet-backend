const { listAnimals, getTypes, getByType } = require("../service/requests");
// const HttpError = require("../helpers/HTTPError");

const getAllAnimals = async (req, res) => {
  const result = await listAnimals();

  res.json(result);
};

const getAllTypes = async (req, res) => {
  const result = await getTypes();

  res.json(result);
};

const getAnimalsByType = async (req, res) => {
  const type = req.params.pet_type;
  console.log("type", type);
  const animalsArrByType = await getByType(type);
  if (!animalsArrByType) {
    // throw HttpError(404, "Not found ");

    res.status(404).send("Not found ");
  }
  res.json(animalsArrByType);
};

module.exports = { getAllAnimals, getAllTypes, getAnimalsByType };
