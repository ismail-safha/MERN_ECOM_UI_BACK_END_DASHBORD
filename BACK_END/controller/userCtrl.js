// eslint-disable-next-line no-undef
const User = require("../models/userModel");
// const asyncHandler = require("express-async-handler");

// Create a User ----------------------------------------------

const createUser = async (req, res) => {
  /**
   * TODO:Get the email from req.body
   */
  const email = req.body.email;
  /**
   * TODO:With the help of email find the user exists or not
   */
  const findUser = await User.findOne({ email: email });

  if (!findUser) {
    /**
     * TODO:if user not found user create a new user
     */
    const newUser = User.create(req.body);
    res.json(newUser);
  } else {
    /**
     * TODO:if user found then thow an error: User already exists
     */
    res.json({
      msg: "User Already Exists",
      success: false,
    });
  }
};

// eslint-disable-next-line no-undef
module.exports = { createUser };
