import axios from "axios";
import { AuthActions } from "../reducers/AuthReducer";
import store from "../store";
import client from "./client";
const API_URL = process.env.REACT_APP_API_URL;

export const login = async (username: string, password: string) => {
  try {
    const {
      data: { token },
    } = await axios.post<{ token: string }>(`${API_URL}auth/login`, {
      username,
      password,
    });
    const config = {
      headers: {
        "x-auth-token": token,
      },
    };
    const {
      data: { user },
    } = await axios.get<{ user: User }>(`${API_URL}auth/show`, config);

    store.dispatch({ type: AuthActions.SetToken, payload: token });
    store.dispatch({ type: AuthActions.SetStoreData, payload: user });
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
  } catch (error) {
    console.log(error);
  }
};

export const initLogin = async () => {
  const token = localStorage.getItem("token");

  if (token) {
    try {
      client.get(`${API_URL}auth/validate`, {
        headers: {
          "x-auth-token": token,
        },
      });
      store.dispatch({ type: AuthActions.SetToken, payload: token });
      store.dispatch({
        type: AuthActions.SetStoreData,
        payload: JSON.parse(localStorage.getItem("user") || "{}"),
      });
    } catch (error) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      store.dispatch({ type: AuthActions.SetToken, payload: null });
      store.dispatch({ type: AuthActions.SetStoreData, payload: null });
    }
  }
};
