const express = require("express");
const { signIn } = require("../controllers/userController");
const { validateLoginUser } = require("../validators/userValidation.js");
const {
  checkValidationMiddleware,
} = require("../middlewares/validationMiddelware.js");

const router = express.Router();

router.post("/login", validateLoginUser, checkValidationMiddleware, signIn);

module.exports = router;
