import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { emptySplitApi } from "./emptySplitApi";
import { API_END_POINTS } from "../config/ApiEndPoints";

export const api = emptySplitApi.injectEndpoints({
  reducerPath: "api",
  refetchOnMountOrArgChange: true,
  endpoints: (builder) => ({
    // auth route//////
    loginuser: builder.mutation({
      query: ({ data }) => ({
       
        url: API_END_POINTS.login,
        method: "POST",
        body: { ...data },
      }),
      invalidatesTags: ["getLanguage", "languageDropdown"],
    }),
   
    forgetpassword: builder.mutation({
      query: ({ data }) => ({
        url: API_END_POINTS.resetPassword,
        method: "POST",
        body: { ...data },
      }),
    }),

    newpassword: builder.mutation({
      query: ({ data }) => ({
        url: API_END_POINTS.updatePassword,
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
   
    ///end auth route
    getBranches: builder.query({
      query: ({ pageUrl, params }) => {
        return {
          url: pageUrl || API_END_POINTS.getBranches,
          method: "GET",
          params,
        };
      },

      providesTags: (result, error, id) => [{ type: "getBranches", id }],
    }),

  }),

  overrideExisting: true,

});

export const {
  useLoginuserMutation,
  useForgetpasswordMutation,
  useNewpasswordMutation,
  useLogoutMutation,
  useGetBranchesQuery,

} = api;