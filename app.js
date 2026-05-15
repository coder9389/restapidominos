const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

const product = require("./Routes/product");
const connectdb = require("./DB/connect");

// Middleware
app.use(express.json());

// Routes
app.use("/api/products", product);

// Home Route
app.get("/", (req, res) => {
  res.send("Connection Established");
});

// PORT
const PORT = process.env.PORT || 3000;

// Start Server
const start = async () => {
  try {
    // Database Connection
    await connectdb(process.env.MONGO_URI);

    // Server Start
    app.listen(PORT, () => {
      console.log(`${PORT} server is live`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();