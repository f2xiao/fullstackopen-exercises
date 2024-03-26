import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAll = async () => {
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (error) {
    console.log("Get persons error", error);
  }
};

export default {
  getAll,
};
