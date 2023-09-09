import { ADD_FOOD, CHANGE_CHECKED, DELETE_CARD, EDIT_CARD } from "./type";
import api from "../../api/foodmoodApi";

export const addFood = (item) => async (dispatch) => {
  console.log(item);
  const response = await api.post("/items", item);
  if (response.status !== 200) {
    return;
  }
  const food = dispatch(getFood());
  console.log(food);
  return dispatch({
    type: ADD_FOOD,
    payload: response.data,
  });
};

export const getFood = () => async (dispatch) => {
  const response = await api.get("/items");
  console.log(response.data);

  if (response.status !== 200) {
    return;
  }
};
export const toggleChecked = (id) => async (dispatch) => {
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
export const editCard = ({ newname, newprice, newimg, id }) => {
  return {
    type: EDIT_CARD,
    payload: {
      newname: newname,
      newimg: newimg,
      newprice: newprice,
      id: id,
    },
  };
};
