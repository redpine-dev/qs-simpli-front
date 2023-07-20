import axios from "./client";
import { MessageActions } from "../reducers/messageReducer";
import store from "../store";

const API_URL = process.env.REACT_APP_API_URL;

export const sendExcel = async (
  rows: {
    reference: string;
    comments: string;
  }[]
) => {
  try {
    axios.post(`${API_URL}excel`, rows);
    store.dispatch({
      type: MessageActions.SetSuccess,
      payload: "Excel sent successfully",
    });
  } catch (error) {
    console.log(error);
    store.dispatch({
      type: MessageActions.SetError,
      payload: "Error sending excel",
    });
  }
};
