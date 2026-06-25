require("dotenv").config();

const express = require("express");
const connectDb = require("./config/connectDb");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://your-frontend-domain.netlify.app"
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  })
);
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
