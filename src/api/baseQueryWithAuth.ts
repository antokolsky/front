import type { BaseQueryFn } from "@reduxjs/toolkit/query";

import type { AxiosRequestConfig } from "axios";
import { axiosBaseQuery } from "./axiosBaseQuery";
import {
	logedOut,
	selectToken,
	tokenReceived,
} from "@/store/slices/authorization-slice";
import { RootState } from "@/store";

export function baseQueryWithReauth(baseUrl: string): BaseQueryFn<
	{
		url: string;
		method?: AxiosRequestConfig["method"];
		data?: AxiosRequestConfig["data"];
		params?: AxiosRequestConfig["params"];
		headers?: AxiosRequestConfig["headers"];
	},
	unknown,
	{
		status: number | undefined,
		data:unknown
	}
> {
	const baseQuery = axiosBaseQuery({ baseUrl: baseUrl });

	return async (args, api, extraOptions) => {
		let state = api.getState() as RootState;

		let token = selectToken(state);
		let result = await baseQuery(args, api, extraOptions);

		if (result.error && result?.error.status === 401) {
			// try to get a new token
			const refreshResult = await baseQuery(
				{
					url: "/auth/refresh/",
					data: { refresh: token?.refresh },
					method: "POST",
				},
				api,
				extraOptions
			);
			const tokenNew = refreshResult.data as {
				refresh: string;
				access: string;
			};
			if (tokenNew) {
				// store the new token
				api.dispatch(tokenReceived(tokenNew));
				
				state = api.getState() as RootState;
				
				token = selectToken( state);
			
				
				// retry the initial query
				result = await baseQuery(
					{
						...args,
						headers: { Authorization: `Bearer ${token?.access}` },
					},
					api,
					extraOptions
				);
			} else {
				api.dispatch(logedOut());
			}
		}
		return result;
	};
}
