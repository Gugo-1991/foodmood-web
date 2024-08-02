import { baseApi, TAGS } from "./api";

const authrApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    userLogin: builder.mutation({
      query: (user) => ({
        url: "/auth/login",
        method: "POST",
        data: user,
      }),
      invalidatesTags: TAGS,
    }),
  }),
  overrideExisting: false,
});

export const { useUserLoginMutation } = authrApi;