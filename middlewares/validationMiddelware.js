const { validationResult } = require("express-validator");
const { useErrorResponse } = require("../utils/apiResponse");

const checkValidationMiddleware = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    if (!errors.isEmpty()) {
      for (let err in errors.errors) {
        return useErrorResponse(res, errors.errors[err].msg, 422);
      }
    }
  }

  next();
};

module.exports = {
  checkValidationMiddleware,
};
