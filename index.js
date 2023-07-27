require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors=require('cors');

const routes = require("./routes/routes");

const app = express();
app.use(cors())
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb',extended: true, parameterLimit:50000}));

const mongoDBURL = process.env.URL;

mongoose.connect(mongoDBURL);

const database = mongoose.connection;

database.on("error", () => {
  console.log("Error while connecting");
});

database.on("connected", () => {
  console.log("Database connected");
});

app.use(express.json());
app.use("/api", routes);

app.listen(5000, () => {
  console.log("Server started");
});
