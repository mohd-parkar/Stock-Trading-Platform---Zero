const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const { HoldingsModel } = require("./model/HoldingsModel.js");
const { PostionsModel } = require("./model/PositionsModel.js");
const { OrdersModel } = require("./model/OrdersModel.js");

const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

// cors middleware and body parser middlware
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 3002;

app.listen(PORT, async () => {
  console.log("App started");

  try {
    // NON SRV LINK of Mongodb ATLAS WORKED
    await mongoose.connect(process.env.ATLAS_MONGO_URL);
    console.log("DB Connected");
  } catch (err) {
    console.error(err);
  }
});

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);

});
app.get("/allPositions", async (req, res) => {
  let allPositions = await PostionsModel.find({});
  res.json(allPositions);
});

// When this api is fetched the data is stored to the database 
app.post("/newOrder", async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  newOrder.save();

  res.send("Orders saved");
});
