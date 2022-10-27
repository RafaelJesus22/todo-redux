import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import { Filter } from "../../types";



interface FilterSlice {
  filter: Filter;
}

const initialState: FilterSlice = {
  filter: "All"
}

const filterSlice = createSlice({
  name: "filterSlice",
  initialState,
  reducers: {
    setFilter: (state, { payload }: PayloadAction<Filter>) => {
      state.filter = payload
    }
  }
})

export const { setFilter } = filterSlice.actions

export default filterSlice.reducer
