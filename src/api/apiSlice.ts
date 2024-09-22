import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "./baseQueryWithAuth";
import {  LogOnToken, TokenObtainPair, UserCreate } from "@/types/dto";

import {
	
	tokenReceived,
} from "@/store/slices/authorization-slice";

export const apiSlice = createApi({
	reducerPath: "api",
	tagTypes: ["Post"],
	baseQuery: baseQueryWithReauth("http://antokolsky.ddns.net/api"),
	// The "endpoints" represent operations and requests for this server

	endpoints: (builder) => ({
		userCreat: builder.mutation<UserCreate, UserCreate>({
			query: (initialUser) => ({
				url: "/russian/users/",
				data: initialUser,
				method: "POST"
			}),
			
		}),
		logToken: builder.query<TokenObtainPair, LogOnToken>({
			query: (authorization) => ({
				url: "/auth/get_token/",
				data: authorization,
				method: "POST",
				
			}),
			onQueryStarted: async (arg,api)=>{
				const token=await	api.queryFulfilled
				if(token.data){
					api.dispatch(tokenReceived(token.data))
				}
				
			}
		}),
		getProjects: builder.query(
			{
				query:()=>({
					url:"/russian/projects/",
				})
			}
		)
	}),
});
export const { useUserCreatMutation, useLazyLogTokenQuery,useGetProjectsQuery } = apiSlice;
