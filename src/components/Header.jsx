import { AppBar, Toolbar, IconButton } from "@mui/material";
import StoreIcon from "@mui/icons-material/Store";

import BurgerBtn from "./BurgerBtn";


const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <StoreIcon />
        </IconButton>
      <BurgerBtn />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
