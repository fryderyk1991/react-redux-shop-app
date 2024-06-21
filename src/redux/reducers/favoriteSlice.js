import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ref, get, set } from "firebase/database";
import { database } from "../../../firebase/firebaseConfig";

const initialState = {
  favoritesProducts: [],
  favoritesStatus: {},
};

export const fetchFavorites = createAsyncThunk(
  'favorites/fetchFavorites',
  async (userId) => {
    const favoritesRef = ref(database, `users/${userId}/favorites`);
    const snapshot = await get(favoritesRef);
    return snapshot.exists() ? snapshot.val() : { favoritesProducts: [], favoritesStatus: {} };
  }
);

export const handleFavorites = createAsyncThunk(
  'favorites/handleFavorites',
  async ({ userId, favoritesProducts, favoritesStatus }) => {
    const favoritesRef = ref(database, `users/${userId}/favorites`);
    const data = { favoritesProducts, favoritesStatus };
    await set(favoritesRef, data);
    return data;
  }
);


const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    clearFavorites(state) {
      state.favoritesProducts = [];
      state.favoritesStatus = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFavorites.fulfilled, (state, action) => {
      state.favoritesProducts = action.payload.favoritesProducts;
      state.favoritesStatus = action.payload.favoritesStatus;
    });
    builder.addCase(handleFavorites.fulfilled, (state, action) => {
      state.favoritesProducts = action.payload.favoritesProducts;
      state.favoritesStatus = action.payload.favoritesStatus;
    });
  }
});


export const { clearFavorites } = favoriteSlice.actions;
export default favoriteSlice.reducer



export const favoritesAmount = (state) => state.favorites.favoritesProducts.length;