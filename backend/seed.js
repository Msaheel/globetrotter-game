require("dotenv").config();
const mongoose = require("mongoose");
const Destination = require("./models/Destination");

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const destinations = [
  {
    name: "Paris",
    clues: ["City of Lights", "Home of the Eiffel Tower"],
    funFacts: ["Paris has over 1,800 bakeries!", "The Louvre is the world's largest art museum."],
    trivia: ["What famous structure was almost dismantled in 1909? (Answer: Eiffel Tower)"],
  },
  {
    name: "Tokyo",
    clues: ["Land of the Rising Sun", "Home to the busiest pedestrian crossing"],
    funFacts: ["Tokyo has more Michelin-starred restaurants than any other city.", "Shibuya Crossing sees about 3,000 people per signal change!"],
    trivia: ["What is the tallest tower in Japan? (Answer: Tokyo Skytree)"],
  },
];

const seedDB = async () => {
  await Destination.deleteMany({});
  await Destination.insertMany(destinations);
  console.log("Database Seeded!");
  mongoose.connection.close();
};

seedDB();