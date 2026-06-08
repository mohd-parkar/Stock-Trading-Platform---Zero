const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config({path : "../.env"});

const {HoldingsModel} = require("../model/HoldingsModel.js");
const {PostionsModel} = require("../model/PositionsModel.js")

const initData = require("./data.js");


const app = express();

const PORT = process.env.PORT || 3002;

app.listen(PORT, async () => {
  console.log("App started");

  try {
    // NON SRV LINK of Mongodb ATLAS WORKED
    await mongoose.connect(process.env.ATLAS_MONGO_URL);
    console.log("DB Connected");
    // await initDB();
  } catch (err) {
    console.error(err);
  }
});



const initDB = async() =>{
    // await HoldingsModel.insertMany(initData.data); 
    // console.log("holding data added")

    await PostionsModel.insertMany(initData.data); 
    console.log("postions data added")
}


// Schema -> Model created -> collection created 
// change inside model = change inside collection