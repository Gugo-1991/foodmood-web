import { ADD_FOOD, CHANGE_CHECKED, DELETE_CARD } from "./type";
import foodmoodApi from "../../api/foodmoodApi";

export const addFood = ({ name, img, price }) => {
  return {
    type: ADD_FOOD,
    payload: {
      name: name,
      img: img,
      price: price,
    },
  };
};

export const toggleChecked = (id) => async (dispatch) => {
  const resp = await foodmoodApi.get("users");
  console.log(resp);
  return dispatch({
    type: CHANGE_CHECKED,
    payload: id,
  });
};
export const deleteCard = () => {
  return {
    type: DELETE_CARD,
  };
};
