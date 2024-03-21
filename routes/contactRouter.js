const express = require("express");
const { postContactForm } = require("../controllers/contact");

contactRouter = express.Router();

contactRouter.post("/", postContactForm);

module.exports = contactRouter;
