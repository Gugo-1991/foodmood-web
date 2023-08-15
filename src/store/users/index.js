import api from "../../api/foodmoodApi";
import { EXIT_ALL, OPEN_USER } from "./type";

// export const queryUsers = async () => {
//   const data = await api.get("/users");
//   console.log(data);
// };

export const loginstate =
  ({ login, password }) =>
  async (dispatch) => {
    try {
      const response = await api.post("/auth/login", { login, password });
      console.log(response.data);
      if (response.status === 200) {
        dispatch({
          type: OPEN_USER,
          payload: response.data,
        });
      }
    } catch (error) {
      // Handle error, you can dispatch an error action here
      console.error("Login error:", error);
    }
  };

export const exitAll = () => {
  return {
    type: EXIT_ALL,
  };
};
