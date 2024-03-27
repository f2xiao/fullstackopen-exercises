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

const deleteOne = async (id) => {
  try {
    const response = await axios.delete(`${baseUrl}/${id}`);
    return response.data;
  } catch (error) {
    console.log("Delete a person error", error);
  }
};

const updateOne = async (id, newObj) => {
  try {
    const response = await axios.put(`${baseUrl}/${id}`, newObj);
    return response.data;
  } catch (error) {
    console.log("Update a person error", error);
  }
};

export default {
  getAll,
  deleteOne,
  updateOne,
};
