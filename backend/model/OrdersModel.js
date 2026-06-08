const {model} = require("mongoose");

const { OrdersSchema } = require("../schema/OrdersSchema");

const OrdersModel = new model("order",OrdersSchema); // the collection will be made as orders (plural)

module.exports = {OrdersModel};