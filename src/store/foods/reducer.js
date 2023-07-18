import { ADD_FOOD, CHANGE_CHECKED, DELETE_CARD } from "./type";
const initionalState = {
  foods: [
    {
      name: "Qabab",
      id: 1,
      img: "https://tshaurma.com/upload/iblock/1c3/1c3b118283793357183f0f3facc6a9ff.png",
      price: "1000",
      checked: false,
    },
    {
      name: "Gril",
      id: 2,
      img: "https://www.eatingwell.com/thmb/hCltJElzU6lxLiKBezMsvH7CV_A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/3758707-339329f96b6044a7bbec888e4aa0fe93.jpg",
      price: "2000",
      checked: false,
    },
    {
      name: "Dolma",
      id: 3,
      img: "https://www.gastronom.ru/binfiles/images/00000221/00077832.jpg",
      price: "3000",
      checked: false,
    },
    {
      name: "Lavash",
      id: 4,
      img: "",
      price: "4000",
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
      break;
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
    default:
      return state;
  }
};

export default FoodsReducer;
