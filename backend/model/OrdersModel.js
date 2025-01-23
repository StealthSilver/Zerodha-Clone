const { model } = require("mongoose");

const { OrdersSchema } = require("../schemas/OrdersSchema");

const OrderssModel = new model("position", OrdersSchema);

module.exports = { OrdersModel };
