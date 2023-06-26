import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const querySlice = createSlice({
    name: 'query',
    initialState: {
      value: "Taylor Swift",
    },
    reducers: {
    handleChange :(state:any, action: PayloadAction<string>) =>{
        state.value= action.payload
    }
    },
  })
  
  // Action creators are generated for each case reducer function
  export const {handleChange } = querySlice.actions;
  
  export default querySlice.reducer;