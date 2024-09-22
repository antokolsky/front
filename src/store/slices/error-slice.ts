import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
import type { AppThunk, RootState } from "../index";

interface initialError {
	errors: {data:string,id:string}[];
}
const initialState: initialError = {
	errors: []
};

export const errorSlice=createSlice({
	name: "error",
	initialState,
    reducers: {
		addError:{
           reducer:  (state, action: PayloadAction<{error:{data:string,id:string}}>) => {
           
            
            state.errors.push(action.payload.error)

		},
        prepare:(id:string,error:string)=>({payload:{error:{data:error,id:id}}})
    },
		removeError:{
           reducer: (state,action: PayloadAction<{error:{id:string}}>) => {
            const errorIndex =  state.errors.findIndex(error=>error.id===action.payload.error.id)
            state.errors.splice(errorIndex,1)
		},
        prepare:(id:string)=>({payload:{error:{id:id}}})
    }
	}}

)

export const {  addError,removeError } = errorSlice.actions;



export const selectErrors = (state: RootState) => state.error.errors;

export const addByRemoveErrorTime = (error:string): AppThunk => {
    return (dispatch) => {
        const idError=nanoid()
        dispatch(addError(idError,error))
       setTimeout(()=>{
        dispatch(removeError(idError))
    },5000) 
      
    }
  }


export default errorSlice.reducer;

