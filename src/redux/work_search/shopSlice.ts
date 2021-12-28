import store from "../../app/store";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import productsAPI from "./productsApi";
import type { RootState } from "../../app/store";

export const fetchResumes = createAsyncThunk(
  "users/fetchAll",
  async (page: string) => {
    const response = await productsAPI.fetchAll(page);
    return response;
  }
);

export const resumesSlice = createSlice({
  name: "resumes",
  initialState: { value: 0, resumes: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchResumes.fulfilled, (state, action) => {
      state.value = action.payload.page_count;
      state.resumes = action.payload;
    });
  },
});

export default resumesSlice.reducer;
