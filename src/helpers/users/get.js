import axios from "axios";

const url = import.meta.env.VITE_USERS;

export const getUsers = async () => {
  const response = await axios.get(url);
  return response.data;
};