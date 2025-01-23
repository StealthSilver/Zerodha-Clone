require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const HoldingsModel = require("./model/HoldingsModel"); // Correct import
const PositionsModel = require("./model/PositionsModel"); // Correct import

const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;

const app = express();

app.get("/allHoldings", async (req, res) => {
  try {
    const allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
  } catch (error) {
    console.error("Error fetching holdings:", error);
    res.status(500).json({ error: "Failed to fetch holdings" });
  }
});

app.get("/allPositions", async (req, res) => {
  try {
    const allPositions = await PositionsModel.find({});
    res.json(allPositions);
  } catch (error) {
    console.error("Error fetching positions:", error);
    res.status(500).json({ error: "Failed to fetch positions at all" });
  }
});

// Connect to MongoDB
mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true }) // Ensure proper options for older mongoose versions
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.error("DB connection error:", err);
  });

// Start the server
app.listen(PORT, () => {
  console.log(`App started on port ${PORT}`);
});
