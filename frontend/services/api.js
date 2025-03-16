import axios from "axios";

const API_URL = "http://localhost:5000/api/destinations/random"; // Change when deployed

export const getRandomDestination = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching destination:", error);
    return null;
  }
};