const express = require("express");
const router = express.Router();
const Destination = require("../models/Destination");

// Get a random destination
router.get("/random", async (req, res) => {
  try {
    const count = await Destination.countDocuments();
    const random = Math.floor(Math.random() * count);
    const destination = await Destination.findOne().skip(random);
    res.json(destination);
  } catch (err) {
    res.status(500).json({ error: "Error fetching destination" });
  }
});

module.exports = router;