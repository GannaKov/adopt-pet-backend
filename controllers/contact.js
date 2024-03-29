const Feedback = require("../models/contactForm");

const postContactForm = async (req, res, next) => {
  const { username, email, message, subject } = req.body;

  try {
    const newFeedback = await Feedback.create({
      username,
      email,
      message,
      subject,
    });
    if (!newFeedback) {
      throw { status: 500, message: "Failed to create feedback" };
    }

    res.status(201).json({ status: "Created ", code: 201, data: newFeedback });
  } catch (err) {
    next(err);
  }
};
module.exports = { postContactForm };
