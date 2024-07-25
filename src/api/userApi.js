import { baseApi } from "./api";

const itemsrApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllItems: builder.query({
      query: () => ({ url: "/items" }),
      providesTags: ["items"],
    }),
 
  }),
  overrideExisting: false,
});

export const { useGetAllItemsQuery, } = itemsrApi;
