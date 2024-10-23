import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "./baseQueryWithAuth";
import { LogOnUser, TokenObtainPair, User, UserCreate } from "@/types/dto";

import { tokenReceived } from "@/store/slices/authorization-slice";

export const apiSlice = createApi({
	reducerPath: "api",
	tagTypes: ["Post"],
	baseQuery: baseQueryWithReauth("http://antokolsky.ddns.net/api"),
	// The "endpoints" represent operations and requests for this server

	endpoints: (builder) => ({
		userCreat: builder.mutation<User, UserCreate>({
			query: (initialUser) => ({
				url: "/russian/users/",
				data: initialUser,
				method: "POST",
			}),
		}),
		logToken: builder.query<TokenObtainPair, LogOnUser>({
			query: (logOnToken) => ({
				url: "/auth/get_token/",
				data: logOnToken,
				method: "POST",
			}),
			onQueryStarted: async (arg, api) => {
				const token = await api.queryFulfilled;
				if (token.data) {
					api.dispatch(tokenReceived(token.data));
				}
			},
		}),
		getProjects: builder.query({
			query: () => ({
				url: "/russian/projects/",
			}),
		}),
		getMyUser: builder.query<User, string>({
			query: (authorization) => {
				return {
					url: "/russian/users/me/",
					headers: { Authorization: `Bearer ${authorization}` },
				};
			},
		}),
	
	}),
});
export const {
	useUserCreatMutation,
	useLazyLogTokenQuery,
	useGetProjectsQuery,
	useGetMyUserQuery,
} = apiSlice;
