const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define the schema
const OrdersSchema = new mongoose.Schema({
  name: String,
  qty: Number,
  prices: Number, // "prices" matches the request body
  mode: String,
});

module.exports = OrdersSchema; // Export ONLY the schema
