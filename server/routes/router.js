const express = require("express");
const router = express.Router();
const Model = require("../models/model");
const Subpiece = require("../models/subpiece");
const Piece = require("../models/piece");
const Attribute = require("../models/attribute");
const Description = require("../models/description");

//get all
getModels = async function (req, res) {
  try {
    const data = await Model.find({});
    res.send(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
getPieces = async function (req, res) {
  try {
    const data = await Piece.find({});
    res.send(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
getSubpieces = async function (req, res) {
  try {
    const data = await Subpiece.find({});
    res.send(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

getAttributes = async function (req, res) {
  try {
    const data = await Attribute.find({});
    res.send(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

getDescriptions = async function (req, res) {
  try {
    const data = await Description.find({});
    res.send(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

getConnectionStatus = async function (req, res) {
  res.send({ message: "Server Connected", connection: true });
};

router.get("/connection", getConnectionStatus);
router.get("/models", getModels);
router.get("/pieces", getPieces);
router.get("/subpieces", getSubpieces);
router.get("/attributes", getAttributes);
router.get("/descriptions", getDescriptions);

//get one
router.get("/:id", getDataId, (req, res) => {
  res.send(res.data.partName);
  console.log(res.data.partName);
});

//create one

postPiece = async function (req, res) {
  const data = new Piece({
    partName: req.body.partName,
    partStTime: req.body.partStTime,
    attribute: req.body.attribute,
    descrition: req.body.description,
    operation: req.body.operation,
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
    partName: req.body.partName,
    partStTime: req.body.partStTime,
    piecec: req.body.piecec,
    attribute: req.body.attribute,
    descrition: req.body.description,
    operation: req.body.operation,
  });
  try {
    const newData = await data.save();
    res.status(201).json(newData);
  } catch (error) {
    res.status(400).send(error);
  }
};

postModel = async function (req, res) {
  const data = new Model({
    partName: req.body.partName,
    partStTime: req.body.partStTime,
    piecec: req.body.piecec,
    subPiecec: req.body.subPiecec,
    attribute: req.body.attribute,
    description: req.body.description,
    operation: req.body.operation,
  });
  try {
    const newData = await data.save();
    res.status(201).json(newData);
  } catch (error) {
    res.status(400).send(error);
  }
};

postAttribute = async function (req, res) {
  const data = new Attribute({
    name: req.body.name,
    value: req.body.value,
  });
  try {
    const newData = await data.save();
    res.status(201).json(newData);
  } catch (error) {
    res.status(400).send(error);
  }
};

postDesription = async function (req, res) {
  const data = new Description({
    name: req.body.name,
    value: req.body.value,
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
router.post("/attribute", postAttribute);
router.post("/description", postDesription);

//update
router.patch("/:id", getDataId, async (req, res) => {
  if (req.body.partName != null) {
    res.data.partName = req.body.partName;
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
