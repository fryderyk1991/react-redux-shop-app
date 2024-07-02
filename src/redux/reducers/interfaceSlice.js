import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  snackbarIsOpen: false,
  snackbarMessage: null,
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
    setSnackbarOpen: (state, action) => {
      state.snackbarIsOpen = true;
      state.snackbarMessage = action.payload
    },
    setSnackbarClose: (state) => {
      state.snackbarIsOpen = false;
      state.snackbarMessage = null;
    }
  },  
});

export const { setOpen, setClose, setSnackbarOpen, setSnackbarClose} = interfaceSlice.actions;


export default interfaceSlice.reducer