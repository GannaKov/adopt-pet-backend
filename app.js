const express = require("express");
const animalRouter = require("./routes/animalRouters");
const mainPageRouter = require("./routes/mainPageRouter.js");
const contactRouter = require("./routes/contactRouter.js");

require("dotenv").config();
const cors = require("cors");
const app = express();
app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//const path = require('path');

// app.use("/users", userRouter);
app.use("/animals", animalRouter);
app.use("/main-page", mainPageRouter);
app.use("/contact-form", contactRouter);

app.use((err, req, res, next) => {
  if (err.status === 404) {
    res.status(404).send(err.message);
  } else {
    next(err);
  }
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error " } = err;

  res.status(status).json({ message });
});

module.exports = app;
