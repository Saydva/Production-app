const express = require("express");
const router = express.Router();
const Model = require("../models/model");
const Subpiece = require("../models/subpiece");
const Piece = require("../models/piece");
//get all

getModel = async function (req, res) {
  try {
    const data = await Model.find();
    res.send(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

getPiece = async function (req, res) {
  try {
    const data = await Piece.find();
    res.send(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

getSubpiece = async function (req, res) {
  try {
    const data = await Subpiece.find();
    res.send(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

router.get("/models", getModel);
//get one by name

router.get("/pieces", getPiece);

router.get("/Subpieces", getSubpiece);

//get one
router.get("/:id", getDataId, (req, res) => {
  res.send(res.data.name);
  console.log(res.data.name);
});

//create one

postModel = async function (req, res) {
  const data = new Model({
    name: req.body.name,
  });
  try {
    const newData = await data.save();
    res.status(201).json(newData);
  } catch (error) {
    res.status(400).send(error);
  }
};

postPiece = async function (req, res) {
  const data = new Piece({
    name: req.body.name,
    stTime: req.body.stTime,
    partOfPiece: req.body.partOfPiece,
    piece: req.body.piece,
    category: req.body.category,
  });
  try {
    const newData = await data.save();
    res.status(201).json(newData);
  } catch (error) {
    res.status(400).send(error);
  }
};

postSubPiece = async function (req, res) {
  const data = new Subpiece({
    name: req.body.name,
    pieces: req.body.pieces,
    category: req.body.category,
  });
  try {
    const newData = await data.save();
    res.status(201).json(newData);
  } catch (error) {
    res.status(400).send(error);
  }
};

router.post("/model", postModel);
router.post("/piece", postPiece);
router.post("/subpiece", postSubPiece);

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
