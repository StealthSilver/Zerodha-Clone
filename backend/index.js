require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const HoldingsModel = require("./model/HoldingsModel");
const PositionsModel = require("./model/PositionsModel");
const OrdersModel = require("./model/OrdersModel");

const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Replacing bodyParser.json() with built-in middleware

// Connect to MongoDB
mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("DB connected");
  })
  .catch((error) => {
    console.error("Error connecting to DB:", error);
  });

// Define routes

// Fetch all holdings
app.get("/allHoldings", async (req, res) => {
  try {
    const allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
  } catch (error) {
    console.error("Error fetching holdings:", error);
    res.status(500).json({ error: "Failed to fetch holdings" });
  }
});

// Fetch all positions
app.get("/allPositions", async (req, res) => {
  try {
    const allPositions = await PositionsModel.find({});
    res.json(allPositions);
  } catch (error) {
    console.error("Error fetching positions:", error);
    res.status(500).json({ error: "Failed to fetch positions" });
  }
});

// Create a new order
app.post("/newOrder", async (req, res) => {
  try {
    const { name, qty, prices, mode } = req.body; // Use "prices" instead of "price"
    const newOrder = new OrdersModel({ name, qty, prices, mode });
    await newOrder.save();
    res.status(201).json({ message: "Order created successfully" });
  } catch (error) {
    console.error("Error saving order:", error);
    res.status(500).json({ error: "Failed to create order" });
  }
});

// Root endpoint
app.get("/", (req, res) => {
  res.send("Backend server is up and running!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`App started on port ${PORT}`);
});
