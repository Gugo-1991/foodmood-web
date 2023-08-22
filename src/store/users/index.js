import api from "../../api/foodmoodApi";
import { ERROR_MESSAGE, EXIT_ALL, OPEN_USER } from "./type";

export const loginstate =
  ({ login, password }) =>
  async (dispatch) => {
    try {
      const response = await api.post("/auth/login", { login, password });
      if (response.status === 200) {
        localStorage.setItem("isLogin", response.data.role);

        dispatch({
          type: OPEN_USER,
        });
      }
    } catch (error) {
      console.error("Login error:", error);
      dispatch({
        type: ERROR_MESSAGE,
        payload: error,
      });
    }
  };

export const exitAll = () => {
  return {
    type: EXIT_ALL,
  };
};
