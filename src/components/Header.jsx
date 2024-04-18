import { AppBar, Toolbar, Typography } from "@mui/material";

import { Link as ReactRouterLink } from "react-router-dom";

import BurgerBtn from "./BurgerBtn";
import DesktopNav from "./DesktopNav";


const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none'}}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" aria-label="logo" component={ReactRouterLink} to='/' sx={{ textDecoration: 'none'}}>SFJ</Typography>
        <DesktopNav />
      <BurgerBtn />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
