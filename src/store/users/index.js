import api from "../../api/foodmoodApi";
import { showLoginModal } from "../showmodal";
import { ERROR_MESSAGE, EXIT_ALL, OPEN_USER } from "./type";

export const loginstate =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      const response = await api.post("/auth/login", { email, password });
      console.log(response);
      if (response.status === 200) {
        localStorage.setItem("isLogin", response.data.role);
        localStorage.setItem("userName", response.data.name);
        localStorage.setItem("userId", response.data.id);

        dispatch({
          type: OPEN_USER,
        });
      }
    } catch (error) {
      console.error("Login error:", error);
      dispatch(showLoginModal());
      dispatch({
        type: ERROR_MESSAGE,
        payload: error,
      });
    }
  };
export const addUser = (user) => async (dispatch) => {
  const response = await api.post("/users", user);
  if (response.status !== 200) {
    console.log("error" + " " + response.massage);
  }
  alert("Now you can login dear" + " " + user.name);
  dispatch(showLoginModal());
};

export const exitAll = () => {
  return {
    type: EXIT_ALL,
  };
};
