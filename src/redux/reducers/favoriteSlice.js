import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoritesProducts: [],
  favoritesStatus: {},
};

const favorites = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite(state, action) {
      const id = action.payload;
      const index = state.favoritesProducts.indexOf(id);
      if (index !== -1) {
        state.favoritesProducts = state.favoritesProducts.filter(
          (item) => item !== id
        );
        delete state.favoritesStatus[id]; 
      } else {
        state.favoritesProducts = [...state.favoritesProducts, id];
        state.favoritesStatus[id] = true;
      }
    },
  },
});


export const { toggleFavorite } = favorites.actions;
export default favorites.reducer