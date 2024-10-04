const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const {
  useErrorResponse,
  useSuccessResponse,
} = require("../utils/apiResponse");

const signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email, password });
    if (!user) {
      return useErrorResponse(
        res,
        "User not found or invalid user credentionals",
        404
      );
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    const userResponse = {
      id: user._id,
      email: user.email,
      token,
    };

    return useSuccessResponse(
      res,
      "User logged in successfully",
      userResponse,
      200
    );
  } catch (error) {
    return useErrorResponse(res, error.message || "Internal Server Error", 500);
  }
};

module.exports = {
  signIn,
};
