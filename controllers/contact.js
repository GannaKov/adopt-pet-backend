const { nanoid } = require("nanoid");

const postContactForm = async (req, res, next) => {
  const { username, email, message, subject } = req.body;
  const newMsg = {
    id: nanoid(6),
    username,
    email,
    message,
    subject,
  };
  try {
    res.status(201).json({
      status: "success",
      code: 201,
      data: { newMsg },
    });
  } catch (err) {
    res.status(err.status).json({
      code: err.status,
      status: err.message,
    });
  }
  //   contactMsg.push(newMsg);

  // {"username":"Ganna",
  // "email":"aaa@dddd",
  // "message":"dddd",
  // "subject":"ssssssssssssss"}
  //   try {
  //     const type = req.params.pet_type;

  //     const animalsArrByType = await queryByType(type);
  //     if (!animalsArrByType) {
  //       throw { status: 404, message: "Not found" };
  //     }
  //     res.json(animalsArrByType);
  //   } catch (error) {
  //     next(error);
  //   }
};
module.exports = { postContactForm };
