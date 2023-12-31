import { ADD_FOOD, CHANGE_CHECKED, GET_FOOD, REFRESH } from "./type";
const initionalState = {
  foods: [],
};
const FoodsReducer = (state = initionalState, action) => {
  switch (action.type) {
    case GET_FOOD:
      const items = action.payload;
      const newItems = items.map((e) => {
        return { ...e, checked: false };
      });
      return {
        foods: [...newItems],
      };
    case ADD_FOOD:
      const item = action.payload;
      return {
        ...state,
        foods: [...state.foods, item],
      };
    case REFRESH:
      window.location.reload();
      return { ...state };

    case CHANGE_CHECKED:
      const updatedContents = state.foods.map((content) => {
        if (content._id === action.payload) {
          return {
            ...content,
            checked: !content.checked,
          };
        }
        return content;
      });
      return {
        ...state,
        foods: updatedContents,
      };

    default:
      return state;
  }
};

export default FoodsReducer;
