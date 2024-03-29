const { getTypes } = require("../controllers/animals");
const { Pet } = require("../models/animals");


const getLimitedAnimals = async (req, res, next) => {
  try {
    const petsTypes = await getTypes();
    if (petsTypes.length === 0) {
      throw { status: 404, message: "Not found pets" };
    }
    const limitedPets = {};
    petsTypes.forEach((type) => {
      limitedPets[type] = [];
    });
    for (type of Object.keys(limitedPets)) {
      const animalsArrByType = await Pet.find({ type }).limit(3);

      limitedPets[type] = animalsArrByType;
    }
    res.status(200).json({
      status: "success",
      code: 200,
      data: limitedPets,
    });
  } catch (error) {
    next(error);
  }
};


module.exports = {
  getLimitedAnimals,
};

// const getLimitedAnimals = async (req, res) => {
//   const pets = await queryListAnimals();
//   const limitedPets = {};

//   for (const [key, value] of Object.entries(pets)) {
//     limitedPets[key] = value.slice(0, 3);
//   }
//   //res.json(limitedPets);
//   res.status(200).json({
//     status: "success",
//     code: 200,
//     data: limitedPets,
//   });
// };
