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
    languageTranslation: builder.query({
      query: (id) => ({
         url: API_END_POINTS.login,
        method: "GET",
      }),
      providesTags: (result, error, id) => [
        { type: "languageTranslationQuery", id },
      ],
    }),
    ///end auth route
  
  }),

  overrideExisting: true,

});

export const {
  useLoginuserMutation,
  useForgetpasswordMutation,
  useNewpasswordMutation,
  useLogoutMutation,

} = api;