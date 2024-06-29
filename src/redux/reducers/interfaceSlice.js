import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  modalIsOpen: false,
  modalMessage: null,
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
    setModalOpen: (state, action) => {
      state.modalIsOpen = true;
      state.modalMessage = action.payload
    },
    setModalClose: (state) => {
      state.modalIsOpen = false;
      state.modalMessage = null;
    }
  },  
});

export const { setOpen, setClose, setModalOpen, setModalClose} = interfaceSlice.actions;


export default interfaceSlice.reducer