import { ADD_FOOD, CHANGE_CHECKED, DELETE_CARD, EDIT_CARD } from "./type";
const initionalState = {
  foods: [
    {
      name: "Qabab",
      id: 1,
      img: "https://tshaurma.com/upload/iblock/1c3/1c3b118283793357183f0f3facc6a9ff.png",
      price: "6",
      checked: false,
    },
    {
      name: "Gril",
      id: 2,
      img: "https://www.kingsford.com/wp-content/uploads/2023/05/Grilled-Whole-Chicken-13_cc1_00000000_desktop2x.jpg",
      price: "11.5",
      checked: false,
    },
    {
      name: "Dolma",
      id: 3,
      img: "https://www.gastronom.ru/binfiles/images/00000221/00077832.jpg",
      price: "3",
      checked: false,
    },
    {
      name: "Lavash",
      id: 4,
      img: "https://assets.epicurious.com/photos/5df942b3f7763a0008ad91b9/4:3/w_5000,h_3750,c_limit/lavash-recipe-121719.jpg",
      price: "2",
      checked: false,
    },
  ],
};
const FoodsReducer = (state = initionalState, action) => {
  switch (action.type) {
    case ADD_FOOD:
      const { name, img, price } = action.payload;
      if (name.length > 1 && price.length > 0) {
        return {
          ...state,
          foods: [
            ...state.foods,
            {
              name: name,
              id: state.foods.length + 1,
              img: img,
              price: price,
              checked: false,
            },
          ],
        };
      } else return { ...state };

    case CHANGE_CHECKED:
      const updatedContents = state.foods.map((content) => {
        if (content.id === action.payload) {
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

    case DELETE_CARD:
      const deleteCard = state.foods.filter(
        (content) => content.checked === false
      );
      return {
        ...state,
        foods: deleteCard,
      };
    case EDIT_CARD:
      const { newname, newimg, newprice, id } = action.payload;
      const editfood = state.foods.map((content) => {
        if (content.id === action.payload.id) {
          return {
            ...content,
            name: newname,
            id: id,
            img: newimg,
            price: newprice,
            checked: true,
          };
        }
        return content;
      });
      return {
        ...state,
        foods: editfood,
      };

    default:
      return state;
  }
};

export default FoodsReducer;
