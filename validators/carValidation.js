const { body } = require("express-validator");

const createCarValidator = [
  body("carModel")
    .exists()
    .withMessage("Car model is required")
    .isString()
    .withMessage("Car model must be a string")
    .isLength({ min: 3 })
    .withMessage("Car model must be at least 3 characters long"),

  body("price")
    .exists()
    .withMessage("Price is required")
    .isNumeric()
    .withMessage("Price must be a number")
    .isFloat({ gt: 0 })
    .withMessage("Price must be greater than 0"),

  body("phoneNumber")
    .exists()
    .withMessage("Phone number is required")
    .isString()
    .withMessage("Phone number must be a string")
    .matches(/^\d{11}$/)
    .withMessage("Phone number must be a valid 11-digit number"),

  body("userId")
    .exists()
    .withMessage("User ID is required")
    .isString()
    .withMessage("User ID must be a valid string"),
];

module.exports = {
  createCarValidator,
};
