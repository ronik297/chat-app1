const express = require("express");
let cors = require("cors");
const app = express();
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const userRoutes = require("./routes/userRoutes");

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/auth", userRoutes);

const server = app.listen(process.env.PORT, () => {
  console.log(`Server started on Port ${process.env.PORT}`);
});
