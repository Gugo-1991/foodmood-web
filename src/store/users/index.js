import api from "../../api/foodmoodApi";
import { ERROR_MESSAGE, EXIT_ALL, OPEN_USER } from "./type";

export const loginstate =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      const response = await api.post("/auth/login", { email, password });
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
export const addUser = (user) => async (dispatch) => {
  console.log(user);
  const response = await api.post("/users", user);

  dispatch(exitAll);
};

export const exitAll = () => {
  return {
    type: EXIT_ALL,
  };
};
