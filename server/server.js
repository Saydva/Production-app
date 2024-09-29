require("dotenv").config();
const express = require("express");
const app = express();
const Uri = process.env.MONGO;
const port = process.env.PORT;

//mogoose

const mongoose = require("mongoose");
mongoose.connect(Uri);

const db = mongoose.connection;
db.on("error", (error) => {
  console.error(error);
});
db.once("open", () => {
  console.log("Connected to Database");
});

//epress
app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

// routes
const router = require("./routes/router");
app.use("/data", router);

app.listen(port, () => {
  console.log(`Server started on port -- ${port}`);
});

//my output
// console.log(port, Uri);
