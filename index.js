require("dotenv").config();

const express = require("express");
const connectDb = require("./config/connectDb");

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

// Connect to MongoDB
connectDb();

// Import routes
const studentRoutes = require("./routes/StudentRout");

// Register routes
app.use("/api/students", studentRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Node.js + MongoDB is running!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
