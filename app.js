const express = require("express");
const animalRouter = require("./routes/animalRouters");
//require('dotenv').config();
const cors = require("cors");
const app = express();
app.use(cors());

//app.use(express.urlencoded({ extended: false }));
//app.use(express.json());
//const path = require('path');

app.use("/", animalRouter);

// // catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });

// error handler
// app.use(function (err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get("env") === "development" ? err : {};
//   // render the error page
//   res.status(err.status || 500);
//   res.render("error");
// });

module.exports = app;