import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import IsLoginReducer from "./users/reducer";
import FoodsReducer from "./foods/reducer";
import showModalReduser from "./showmodal/reduser";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  combineReducers({
    modal: showModalReduser,
    isLogin: IsLoginReducer,
    foods: FoodsReducer,
  }),
  compose(applyMiddleware(thunk), composeWithDevTools())
);

export default store;
