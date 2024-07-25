import { createSlice } from "@reduxjs/toolkit";

export const itemInitialState = {
  name: "",
  description: "",
  price: "",
  category: "",
  img: "",
  createData: "",
};

const itemSlice = createSlice({
  name: "items",
  initialState: itemInitialState,
  reducers: {
    setItem: (state, { payload }) => {
      return { ...payload };
    },
  },
});

export const { setItem } = itemSlice.actions;

export default itemSlice.reducer;

export const selectItem = (state) => state.item;
