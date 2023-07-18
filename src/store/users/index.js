import { EXIT_ALL, OPEN_USER } from "./type";

export const loginstate = ({ login, password }) => {
  return {
    type: OPEN_USER,
    payload: {
      login: login,
      password: password,
    },
  };
};
export const exitAll = () => {
  return {
    type: EXIT_ALL,
  };
};
