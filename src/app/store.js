import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "../api/api";
import itemSlice from "./itemSlice";
import authSlice from "./authSlice";

export const store = configureStore({
  reducer: {
    item: itemSlice,
    auth: authSlice,

    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});
