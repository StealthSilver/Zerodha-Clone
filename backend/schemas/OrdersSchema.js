const { Schema } = require("mongoose");

const OrderssSchema = new Schema({
  name: String,
  qty: Number,
  prices: Number,
  mode: String,
});

module.exports = { OrdersSchema };
