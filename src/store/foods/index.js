import {
  ADD_FOOD,
  CHANGE_CHECKED,
  DELETE_CARD,
  EDIT_CARD,
  GET_FOOD,
} from "./type";
import api from "../../api/foodmoodApi";

export const addFood = (item) => async (dispatch) => {
  const response = await api.post("/items", item);
  if (response.status !== 200) {
    return;
  }
  // const food = dispatch(getFood());
  // console.log(food);
  return dispatch({
    type: ADD_FOOD,
    payload: response.data,
  });
};

export const getFood = () => async (dispatch) => {
  const response = await api.get("/items");

  if (response.status !== 200) {
    return;
  }
  return dispatch({
    type: GET_FOOD,
    payload: response.data,
  });
};
export const toggleChecked = (_id) => async (dispatch) => {
  return dispatch({
    type: CHANGE_CHECKED,
    payload: _id,
  });
};
export const deleteCard = () => {
  return {
    type: DELETE_CARD,
  };
};
export const editCard = ({ newname, newprice, newimg, _id }) => {
  return {
    type: EDIT_CARD,
    payload: {
      newname: newname,
      newimg: newimg,
      newprice: newprice,
      _id: _id,
    },
  };
};
