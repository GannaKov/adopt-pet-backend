// const axios = require("axios");
// const pets = require("../petList");

// const queryListAnimals = () => {
//   //   for (key in pets) {
//   //     console.log("key", key);
//   //     console.log(pets[key]);
//   //   }
//   return pets;
// };

// const queryTypes = () => {
//   const typesArr = Object.keys(pets);

//   return typesArr;
// };

// const queryByType = async (type) => {
//   const animalArr = await queryListAnimals();
//   if (animalArr.hasOwnProperty(type)) {
//     const animalArrByType = animalArr[type];

//     return animalArrByType;
//   } else {
//     return null;
//   }
// };

// const querySingleAnimal = async (type, id) => {
//   const arrByType = await queryByType(type);
//   if (arrByType) {
//     const animal = arrByType.find((item) => item.id === id);
//     return animal || null;
//   } else {
//     return null;
//   }
// };

// module.exports = {
//   queryListAnimals,
//   queryTypes,
//   queryByType,
//   querySingleAnimal,
// };
