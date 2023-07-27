const express = require("express");
const Model = require("../model/model");

const router = express.Router();

module.exports = router;

router.post("/post", async (req, res) => {
  const data = new Model({
    name: req.body.name,
    description: req.body.description,
    media: req.body.media,
    likes: req.body.likes,
    tags: req.body.tags,
    likedBy:req.body.likedBy,
    mediaAspectRatio:req.body.mediaAspectRatio,
    mediaType:req.body.mediaType
  });
  console.log("Data to add",req.body.name)

  try {
    const dataToSave = await data.save();
    const updatedData = await Model.find();
    res.status(200).json(updatedData);
  } catch (e) {
    res.status(400).json({ error: "error while adding" + e.message });
  }
});

router.get("/posts", async (req, res) => {
  try {
    const data = await Model.find();
    res.json(data);
  } catch (e) {
    res.status(400).json({ error: "error while getting" + e.message });
  }
});

router.get("/posts/:id", async (req, res) => {
  try {
    const data = await Model.findById(req.params.id);
    res.json(data);
  } catch (e) {
    res.status(400).json({ error: "error while getting" + e.message });
  }
});

router.patch("/posts/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const result = await Model.findByIdAndUpdate(id, updatedData, {
      new: true,
    });
    const data = await Model.find();
    res.status(200).json(data);
  } catch (e) {
    res.status(400).json({ error: "error while updating" + e.message });
  }
});
