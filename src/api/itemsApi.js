import { baseApi } from "./api";

const itemsrApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllItems: builder.query({
      query: () => ({ url: "/items" }),
      providesTags: ["items"],
    }),
    addNewItem: builder.mutation({
      query: (item) => ({
        url: `/items`,
        method: "Post",
        data: item ,
      }),
      invalidatesTags: ["items"],
    }),
  
    changeItem: builder.mutation({
      query: (item) => ({
        url: `/items/${item._id}`,
        method: "PUT",
        data: { item },
      }),
      invalidatesTags: ["items"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetAllItemsQuery,useAddNewItemMutation, useChangeItemMutation } = itemsrApi;
