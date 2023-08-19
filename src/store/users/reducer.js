import { OPEN_USER, EXIT_ALL } from "./type";
const initialState = {
  isLogin: localStorage.getItem("isLogin"),
};
const IsLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_USER:
      const user = localStorage.getItem("isLogin");
      return {
        ...state,
        isLogin: user,
      };

    case EXIT_ALL:
      return {
        ...state,
        isLogin: null,
      };

    default:
      return state;
  }
};

export default IsLoginReducer;
