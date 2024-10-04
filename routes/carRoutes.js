const express = require("express");
const { createCar } = require("../controllers/carController");

const { createCarValidator } = require("../validators/carValidation");
const upload = require("../middlewares/uploadMiddleware");
const {
  checkValidationMiddleware,
} = require("../middlewares/validationMiddelware");
const router = express.Router();

router.post(
  "/create",
  upload.array("pictures", 10),
  createCarValidator,
  checkValidationMiddleware,
  createCar
);

module.exports = router;
