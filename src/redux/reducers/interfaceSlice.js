import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  isFavorite: false,
};

export const interfaceSlice = createSlice({
  name: "interface",
  initialState,
  reducers: {
    setOpen: (state) => {
      state.isOpen = true;
    },
    setClose: (state) => {
      state.isOpen = false;
    },
    toggleFavorite: (state) => {
      state.isFavorite = !state.isFavorite;
    }
  },  
});

export const { setOpen, setClose, toggleFavorite } = interfaceSlice.actions;


export default interfaceSlice.reducer