import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    favorites: [],
  },
  reducers: {
    addToFavorites: (state, action) => {
      state.favorites.push(action.payload);
      console.log(JSON.parse(JSON.stringify(state.favorites)));
    },
    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter(
        (media) => media.id !== action.payload
      );
      console.log(JSON.parse(JSON.stringify(state.favorites)));
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export const selectFavorites = (state) => state.favorites.favorites;
export default favoritesSlice.reducer;
