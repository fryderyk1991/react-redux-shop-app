import { IconButton } from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

import { useDispatch, useSelector } from "react-redux";
import { setOpen, setClose } from "../redux/reducers/interfaceSlice";

const BurgerBtn = () => {
  const isOpen = useSelector((state) => state.interface.isOpen);
  const dispatch = useDispatch();
  return (
    <>
    {isOpen ? (
          <IconButton
          size="large"
          edge="end"
          color="inherit"
          aria-label="nav-mobile-button"
          sx={{ display: { md: "none"}, color: 'text.secondary', zIndex: 1300}}
          onClick={() => dispatch(setClose())}
        >
          <CloseRoundedIcon />
        </IconButton>
    ) : (
        <IconButton
        size="large"
        edge="end"
        color="inherit"
        aria-label="nav-mobile-button"
        sx={{ display: { md: "none" } }}
        onClick={() => dispatch(setOpen())}
      >
      <MenuRoundedIcon />
      </IconButton>
    )}
    </>
  );
};

export default BurgerBtn;
