const axios = require("axios");
const pets = require("../petList");

const listAnimals = () => {
  //   for (key in pets) {
  //     console.log("key", key);
  //     console.log(pets[key]);
  //   }
  return pets;
};

const getTypes = () => {
  const typesArr = Object.keys(pets);

  return typesArr;
};

const getByType = (type) => {
  const animalArr = listAnimals();
  if (animalArr.hasOwnProperty(type)) {
    const animalArrByType = animalArr[type];
    console.log("by type", animalArrByType);
    return animalArrByType;
  } else {
    return null;
  }
};

module.exports = { listAnimals, getTypes, getByType };
