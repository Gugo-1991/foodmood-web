import { ADD_FOOD, CHANGE_CHECKED, DELETE_CARD, EDIT_CARD } from "./type";

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
