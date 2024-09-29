const express = require("express");
const router = express.Router();
const Data = require("../models/model");

//get all
router.get("/", async (req, res) => {
  try {
    const data = await Data.find();
    res.send(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//get one
router.get("/:id", async (req, res) => {});
//create one
router.post("/", async (req, res) => {
  const data = new Data({
    name: req.body.name,
    dataNumber: req.body.dataNumber,
  });
  try {
    const newData = await data.save();
    res.status(201).json(newData);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
//update
router.patch("/", (req, res) => {});
//delete
router.delete("/:id", (req, res) => {});

module.exports = router;
