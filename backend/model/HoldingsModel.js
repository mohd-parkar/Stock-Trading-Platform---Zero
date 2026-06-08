const {model} = require("mongoose");

const {HoldingsSchema} = require("../schema/HoldingsSchema");

const HoldingsModel = new model("holding",HoldingsSchema); // the collection will be made as holdings (plural)

module.exports = {HoldingsModel};