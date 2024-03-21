const { queryListAnimals } = require("../service/requests");
const getLimitedAnimals = async (req, res) => {
  const pets = await queryListAnimals();
  const limitedPets = {};

  for (const [key, value] of Object.entries(pets)) {
    limitedPets[key] = value.slice(0, 3);
  }
  //res.json(limitedPets);
  res.status(200).json({
    status: "success",
    code: 200,
    data: limitedPets,
  });
};
module.exports = {
  getLimitedAnimals,
};
