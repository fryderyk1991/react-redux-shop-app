import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  toolTipOpen: false,
  toolTipId: null,
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
  },  
});

export const { setOpen, setClose, setToolTipOpen, setToolTipClose } = interfaceSlice.actions;


export default interfaceSlice.reducer