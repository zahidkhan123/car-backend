const Car = require("../models/carModel"); // Import the Car model
const {
  useErrorResponse,
  useSuccessResponse,
} = require("../utils/apiResponse");
const createCar = async (req, res) => {
  const { carModel, price, phoneNumber, userId } = req.body;
  if (!req.files || req.files.length === 0) {
    return useErrorResponse(res, "Pictures are required", 422);
  }
  const imageUrls = req.files
    ? req.files.map((file) => `/uploads/${file.filename}`)
    : [];

  try {
    const newCar = new Car({
      carModel,
      price,
      phoneNumber,
      pictures: imageUrls,
      userId,
    });

    const savedCar = await newCar.save();
    return useSuccessResponse(res, "Car created successfully", savedCar, 201);
  } catch (error) {
    return useErrorResponse(res, error.message || "Server error", 500);
  }
};

module.exports = {
  createCar,
};
