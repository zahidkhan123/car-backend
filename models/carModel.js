const mongoose = require("mongoose");

const carSchema = new mongoose.Schema(
  {
    carModel: {
      type: String,
      required: true,
      minlength: 3,
      index: true,
    },
    price: {
      type: Number,
      required: true,
      index: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      match: /^\d{11}$/,
      unique: true,
    },
    pictures: {
      type: [String],
      validate: {
        validator: function (val) {
          return val.length <= 10;
        },
        message: "Number of pictures exceeds the specified maxPictures limit",
      },
    },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      index: true,
    },
  },
  {
    timestamps: true,
  }
);

carSchema.index({ carModel: 1, price: -1 });

const Car = mongoose.model("Car", carSchema);

module.exports = Car;
