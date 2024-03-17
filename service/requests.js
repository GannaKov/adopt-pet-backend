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

const getByType = async (type) => {
  const animalArr = await listAnimals();
  if (animalArr.hasOwnProperty(type)) {
    const animalArrByType = animalArr[type];

    return animalArrByType;
  } else {
    return null;
  }
};

const singleAnimal = async (type, id) => {
  const arrByType = await getByType(type);
  if (arrByType) {
    const animal = arrByType.find((item) => item.id === id);
    return animal || null;
  } else {
    return null;
  }
};

module.exports = { listAnimals, getTypes, getByType, singleAnimal };
