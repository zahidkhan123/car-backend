const { body } = require("express-validator");

const validateLoginUser = [
  body("email")
    .exists()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Email must be a valid email address"),

  body("password")
    .exists()
    .withMessage("Password is required")
    .isString()
    .withMessage("Password must be a string")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
];

module.exports = {
  validateLoginUser,
};
