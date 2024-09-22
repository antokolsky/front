import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../index";

// Define a type for the slice state
interface initialToken {
	token: { refresh: string; access: string }|null;
}

const localStorageToken=localStorage.getItem("token")
// Define the initial state using that type
const initialState: initialToken = {
	token: localStorageToken!==null?JSON.parse(localStorageToken):null,
};

export const authorizationSlice = createSlice({
	name: "authorization",
	// `createSlice` will infer the state type from the `initialState` argument
	initialState,
	reducers: {
		tokenReceived: (state, action: PayloadAction<{ refresh: string; access: string }>) => {
			state.token = action.payload;
			localStorage.setItem("token",JSON.stringify(action.payload))
		},
		loggedOut:(state) => {
			state.token=null
			localStorage.removeItem("token")

		}
	},
});

export const {  tokenReceived,loggedOut } = authorizationSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectToken = (state: RootState) => state.authorization.token;

export default authorizationSlice.reducer;
