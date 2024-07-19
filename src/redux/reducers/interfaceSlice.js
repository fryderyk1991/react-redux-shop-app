import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  snackbarIsOpen: false,
  snackbarMessage: null,
  modalIsOpen: false,
  modalCartTotalPrice: null,
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
    },
    setModalOpen: (state, action) => {
      state.modalIsOpen = true;
      state.modalCartTotalPrice = action.payload
    },
    setModalClose: (state) => {
      state.modalIsOpen = false;
      state.modalCartTotalPrice = null;
    }
  },  
});

export const { setOpen, setClose, setSnackbarOpen, setSnackbarClose, setModalOpen, setModalClose} = interfaceSlice.actions;


export default interfaceSlice.reducer