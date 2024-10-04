const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const carRoutes = require("./routes/carRoutes");
const authMiddleware = require("./middlewares/authMiddleware");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");

dotenv.config();
const app = express();
connectDB();
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "https://6700283893a3918b7ea2bf5f--carfrontendss.netlify.app/",
    methods: ["POST"],
    credentials: true,
  })
);

// Routes
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/cars", authMiddleware, carRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
