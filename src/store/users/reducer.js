import { OPEN_USER, EXIT_ALL } from "./type";
const initialState = {
  isLogin: {
    createdDate: "",
    email: "",
    name: "",
    password: "",
    role: "",
    secondName: "",
  },
};
const IsLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_USER:
      return {
        ...state,
        isLogin: action.payload,
      };

    // const updatedContents = state.isLogin.map((content) => {
    //   if (
    //     content.login === `${action.payload.login}` &&
    //     content.password === `${action.payload.password}`
    //   ) {
    //     return {
    //       ...content,
    //       enter: !content.enter,
    //     };
    //   }
    //   return content;
    // });
    // return {
    //   ...state,
    //   isLogin: updatedContents,
    // };

    case EXIT_ALL:
      return {
        ...state,
        isLogin: {
          createdDate: "",
          email: "",
          name: "",
          password: "",
          role: "",
          secondName: "",
        },
      };

    default:
      return state;
  }
};

export default IsLoginReducer;
