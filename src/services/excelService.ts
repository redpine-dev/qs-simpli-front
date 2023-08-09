import axios from "./client";

const API_URL = process.env.REACT_APP_API_URL;

export const sendExcel = async (
  rows: {
    reference: string;
    comments: string;
  }[]
) => {
  try {
    await axios.post(`${API_URL}excel`, rows);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
