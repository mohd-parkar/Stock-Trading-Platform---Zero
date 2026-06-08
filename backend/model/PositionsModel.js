const {model} = require("mongoose");

const {PostionsSchema} = require("../schema/PostionsSchema");

const PostionsModel = new model("position", PostionsSchema);

module.exports = {PostionsModel};