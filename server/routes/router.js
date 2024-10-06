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
//get one by name

//get one
router.get("/:id", getDataId, (req, res) => {
  res.send(res.data.name);
  console.log(res.data.name);
});

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
    res.status(400).send(error);
  }
});

//update
router.patch("/:id", getDataId, async (req, res) => {
  if (req.body.name != null) {
    res.data.name = req.body.name;
  }
  if (req.body.dataNumber != null) {
    res.data.dataNumber = req.body.dataNumber;
  }
  try {
    const newData = await res.data.save();
    res.json(newData);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//delete
router.delete("/:id", getDataId, async (req, res) => {
  try {
    await res.data.deleteOne();
    res.status(201).json({ message: "Data removed" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

//async middleware function to get data by id

async function getDataId(req, res, next) {
  let data;
  try {
    data = await Data.findById(req.params.id);
    if (data == null) {
      return res.status(404).send({ message: "Can not find data" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
  res.data = data;
  next();
}

module.exports = router;
