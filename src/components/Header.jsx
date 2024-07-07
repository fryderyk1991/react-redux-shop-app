import { AppBar, Toolbar, Typography, IconButton, Box } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

import { Link as ReactRouterLink } from "react-router-dom";

import BurgerBtn from "./BurgerBtn";
import DesktopNav from "./DesktopNav";
import SiginGoogle from "./SiginGoogle";
import LogoutButton from "./LogoutButton";
import LoadCircle from "./LoadCircle";

import { useSelector } from "react-redux";

const Header = () => {
  const { user, isLoading } = useSelector((state) => state.user);
  console.log(isLoading);

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "transparent", boxShadow: "none" }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          aria-label="logo"
          component={ReactRouterLink}
          to="/"
          sx={{ textDecoration: "none", flex: 1}}
        >
          SFJ
        </Typography>
        <DesktopNav />
                  <Box sx={{ zIndex: 1300, display: "flex", alignItems: "center" }}>
          {isLoading ? (
            <LoadCircle size={20}/>
          ) : user ? (
            <>
              <IconButton size="large">
                <PersonIcon />
              </IconButton>
              <Typography variant="body1" component="span">
                {user.name}
              </Typography>
              <Box sx={{ display: { md: "block", xs: 'none', sm: 'none'}}} >
                <LogoutButton />
              </Box>
            </>
          ) : (
            <SiginGoogle>
              <IconButton size="large">
                <PersonIcon />
              </IconButton>
            </SiginGoogle>
          )}
        </Box>
       
        <BurgerBtn />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
