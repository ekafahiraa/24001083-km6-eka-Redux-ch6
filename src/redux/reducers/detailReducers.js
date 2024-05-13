import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  detailMovieData: null,
  isLoading: false,
};

const detailSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {
    setDetailMovie: (state, action) => {
      state.detailMovieData = action.payload;
      state.isLoading = false;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setDetailMovie, setLoading } = detailSlice.actions;

export default detailSlice.reducer;
