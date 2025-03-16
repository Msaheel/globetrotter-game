import { useEffect, useState } from "react";
import { getRandomDestination } from "../services/api";
import { motion } from "framer-motion";
import Confetti from "react-confetti";

export default function Game() {
  const [destination, setDestination] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [score, setScore] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    fetchDestination();
  }, []);

  const fetchDestination = async () => {
    const data = await getRandomDestination();
    if (data) {
      const options = generateOptions(data.name);
      setDestination({ ...data, options });
      setSelectedAnswer("");
      setFeedback("");
      setShowConfetti(false);
    }
  };

  const generateOptions = (correctAnswer) => {
    const allOptions = ["Paris", "Tokyo", "London", "New York"];
    if (!allOptions.includes(correctAnswer)) {
      allOptions.pop();
      allOptions.push(correctAnswer);
    }
    return allOptions.sort(() => Math.random() - 0.5);
  };

  const checkAnswer = (answer) => {
    setSelectedAnswer(answer);
    if (answer === destination.name) {
      setFeedback("🎉 Correct! " + destination.funFacts[0]);
      setScore(score + 1);
      setShowConfetti(true);
    } else {
      setFeedback("😢 Incorrect! " + destination.funFacts[1]);
    }
  };

  return (
    <div className="flex flex-col items-center p-4">
      {showConfetti && <Confetti />}
      <h1 className="text-2xl font-bold">Guess the Destination! 🌍</h1>
      <p className="mt-2 text-lg">Score: {score}</p>

      {destination ? (
        <div className="mt-4">
          <p className="text-lg">{destination.clues[0]}</p>
          <div className="mt-4 grid grid-cols-2 gap-4">
            {destination.options.map((option, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.1 }}
                className={`p-3 rounded-lg text-white ${
                  selectedAnswer === option
                    ? option === destination.name
                      ? "bg-green-500"
                      : "bg-red-500"
                    : "bg-blue-500"
                }`}
                onClick={() => checkAnswer(option)}
              >
                {option}
              </motion.button>
            ))}
          </div>
          {feedback && <p className="mt-4 text-xl">{feedback}</p>}
          <button className="mt-4 p-2 bg-gray-800 text-white rounded" onClick={fetchDestination}>
            Play Again 🔄
          </button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}