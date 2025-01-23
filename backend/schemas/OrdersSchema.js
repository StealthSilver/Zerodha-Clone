const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define the schema
const OrdersSchema = new Schema({
  name: { type: String, required: true },
  qty: { type: Number, required: true },
  prices: { type: Number, required: true },
  mode: { type: String, required: true },
});

module.exports = OrdersSchema; // Export ONLY the schema
