import { baseApi } from "./api";

const itemsrApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addNewUser: builder.mutation({
      query: (user) => ({
        url: `/users`,
        method: "Post",
        data: user,
      }),
      invalidatesTags: ["users"],
    }),
  }),
  overrideExisting: false,
});

export const { useAddNewUserMutation } = itemsrApi;
