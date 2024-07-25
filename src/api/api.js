import { createApi } from "@reduxjs/toolkit/query/react";
import axios from "axios";

export const axiosApi = axios.create({
  baseURL: "http://localhost:5000/api/v1",
});
axiosApi.interceptors.response.use(function (response) {
  return response;
});
const axiosBaseQuery =
  ({ baseUrl }) =>
  async ({ url, method, data, headers = {}, params = {} }) => {
    try {
      const result = await axiosApi({
        url: baseUrl + url,
        method,
        data,
        params,
      });
      return { data: result.data };
    } catch (axiosError) {
      return {
        error: {
          status: axiosError.response?.status,
          data: axiosError.response?.data || axiosError.message,
        },
      };
    }
  };

export const TAGS = ['items','auth'];

export const baseApi = createApi({
  baseQuery: axiosBaseQuery({
    baseUrl: "http://localhost:5000/api/v1",
  }),

  tagTypes: TAGS,
  endpoints: () => ({}),
});

export const { useGetItemsQuery } = baseApi;
