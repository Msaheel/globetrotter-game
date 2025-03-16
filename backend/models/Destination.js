const mongoose = require("mongoose");

const DestinationSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  clues: { type: [String], required: true },
  funFacts: { type: [String], required: true },
  trivia: { type: [String], required: true },
});

module.exports = mongoose.model("Destination", DestinationSchema);