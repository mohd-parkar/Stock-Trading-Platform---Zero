const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3002;

app.listen(PORT, async () => {
    console.log("App started");
   
  try { // NON SRV LINK of Mongodb ATLAS WORKED
  await mongoose.connect(process.env.ATLAS_MONGO_URL);
  console.log("DB Connected");
} catch (err) {
  console.error(err);
}
});
