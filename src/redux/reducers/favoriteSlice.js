import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ref, get, set } from "firebase/database";
import { database } from "../../../firebase/firebaseConfig";

const initialState = {
  favoritesProducts: [],
};

// export const fetchFavorites = createAsyncThunk(
//   'favorites/fetchFavorites',
//   async (userId) => {
//     const favoritesRef = ref(database, `users/${userId}/favorites`);
//     const snapshot = await get(favoritesRef);
//     return snapshot.exists() ? snapshot.val() : { favoritesProducts: [], favoritesStatus: {} };
//   }
// );

// export const saveFavorites = createAsyncThunk(
//   'favorites/saveFavorites',
//   async ({ userId, favoritesProducts, favoritesStatus }) => {
//     const favoritesRef = ref(database, `users/${userId}/favorites`);
//     // const data = { favoritesProducts, favoritesStatus };
//     const data = { favoritesProducts };
//     await set(favoritesRef, data);
//     return data;
//   }
// );

const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite(state, action) {
      const id = action.payload;
      const existingProductIndex = state.favoritesProducts.findIndex(product => product.id === id);

      if (existingProductIndex !== -1) {
        state.favoritesProducts = state.favoritesProducts.filter(product => product.id !== id)
      } else {
        state.favoritesProducts = [ ...state.favoritesProducts, {id, favoritesStatus: true}]
      }

    },
    clearFavorites(state) {
      state.favoritesProducts = [];
      // state.favoritesStatus = {};
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(fetchFavorites.fulfilled, (state, action) => {
  //     state.favoritesProducts = action.payload.favoritesProducts;
  //     state.favoritesStatus = action.payload.favoritesStatus;
  //   });
  // }
});


export const { toggleFavorite, clearFavorites } = favoriteSlice.actions;
export default favoriteSlice.reducer



export const favoritesAmount = (state) => state.favorites.favoritesProducts.length;