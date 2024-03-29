const mongoose = require("mongoose");
const { Schema } = mongoose;

const feedbackSchema = new Schema(
  {
    username: {
      type: String,
      minlength: [3, "Too Short!"],
      maxlength: [50, "Too Long!"],
      required: [true, "Required"],
    },
    email: {
      type: String,
      validate: {
        validator: (value) => {
          return /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i.test(value);
        },
        message: "Must be a valid email!",
      },
      required: [true, "Required"],
    },
    message: {
      type: String,
      minlength: [3, "Too short"],
      maxlength: [500, "Too long"],
      required: [true, "Required"],
    },
    subject: {
      type: String,
      required: [true, "Required"],
    },
  },
  { collection: "feedbacks" }
);

const Feedback = mongoose.model("Feedback", feedbackSchema);

module.exports = Feedback;
