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
    initFirstUser: builder.mutation({
      query: () => ({
        url: "/users/initFirstUser",
        method: "POST",
      }),
      invalidatesTags: ["users"],
    }),
  }),
  overrideExisting: false,
});

export const { useAddNewUserMutation, useInitFirstUserMutation } = itemsrApi;
