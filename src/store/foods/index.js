import { ADD_FOOD, CHANGE_CHECKED, GET_FOOD, REFRESH } from "./type";
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
export const deleteCard = (id) => async (dispatch) => {
  const resp = await api.delete(`items/${id}`);
  if (resp.status !== 200) {
  }
  return dispatch({
    type: REFRESH,
  });
};

export const editCard = (item, _id) => async (dispatch) => {
  const response = await api.put(`items/${_id}`, item);
  if (response.status !== 200) {
    return;
  }
  return dispatch({
    type: REFRESH,
  });
};

export const addBalance = async (userId, value) => {
  try {
    const response = await api.put(`/accounts/${userId}/${value}`);
    if (response.status === 200) {
    } else {
      console.log("Error updating balance");
    }
  } catch (error) {
    console.error("Error updating balance:", error);
  }
};
