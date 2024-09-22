import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import authorizationReducer from "./slices/authorization-slice";
import { apiSlice } from "@/api/apiSlice";
import errorReduser from "./slices/error-slice"
export const store = configureStore({
	reducer: {
		authorization: authorizationReducer,
		error:errorReduser,
		[apiSlice.reducerPath]: apiSlice.reducer
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware()
	.concat(apiSlice.middleware)
	
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
// Infer the `AppDispatch` type from the store itself
export type AppDispatch = AppStore['dispatch']
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>