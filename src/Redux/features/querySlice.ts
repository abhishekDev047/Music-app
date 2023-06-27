import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface visualState {
  value: string
}

const initialState: visualState = {
  value: "ok",
}

export const querySlice = createSlice({
  name: 'query',
  initialState,
  reducers: {
    handleChange: (state) => {
      state.value += (state.value === 'visually-hidden')? "ok" : "visually-hidden"
    },
  },
})

export const {  handleChange } = querySlice.actions;

export const selectCount = (state: RootState) => state.visual.value;

export default querySlice.reducer;