import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { emptySplitApi } from "./emptySplitApi";
import { API_END_POINTS } from "../config/ApiEndPoints";

export const api = emptySplitApi.injectEndpoints({
  reducerPath: "api",
  refetchOnMountOrArgChange: true,
  endpoints: (builder) => ({
    loginuser: builder.mutation({
      query: ({ data }) => ({
        url: API_END_POINTS.login,
        method: "POST",
        body: { ...data },
      }),
    }),
    updatepassword: builder.mutation({
      query: ({ data }) => ({
        url: API_END_POINTS.updatePassword,
        method: "PUT",
        body: { ...data },
      }),
    }),
    updateProfile: builder.mutation({
      query: ({ data }) => ({
        url: API_END_POINTS.updateProfile,
        method: "PUT",
        body: { ...data },
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: API_END_POINTS.logout,
        method: "POST",
      }),
    }),
    adddiary: builder.mutation({
      query: ({ data }) => ({
        url: API_END_POINTS.adddiary,
        method: "POST",
        body: { ...data },
      }),
    }),
    getdiarylist: builder.query({
      query: ({ pageUrl, params }) => {
        return {
          url: pageUrl || API_END_POINTS.diarylist,
          method: "GET",
          params,
        };
      },
    }),
    deletediary: builder.mutation({
      query: ({ data }) => ({
        url: API_END_POINTS.deletediary,
        method: "DELETE",
        body: { ...data },
      }),
    }),
    getManagerList: builder.query({
      query: () => {
        return {
          url: API_END_POINTS.managerList,
          method: "GET",
        };
      },
    }),
   
  }),

  overrideExisting: true,

});
export const {
  useLoginuserMutation,
  useUpdatepasswordMutation,
  useUpdateProfileMutation,
  useLogoutMutation,
  useAdddiaryMutation,
  usedeletediaryMutation,
  useGetdiarylistQuery,
  useGetManagerListQuery,
} = api;