const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const petTypeSchema = new Schema(
  {
    type: String,
  },
  { collection: "pets_type" }
);

const PetType = model("PetType", petTypeSchema);

const petSchema = new mongoose.Schema(
  {
    id: String,
    name: String,
    type: String,
    age: String,
    breed: String,
    description: String,
    url: String,
  },
  { collection: "pets" }
);

const Pet = mongoose.model("Pet", petSchema);

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
module.exports = { Pet, PetType, User };
