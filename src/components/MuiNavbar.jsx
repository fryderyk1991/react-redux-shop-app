import { AppBar, Toolbar, IconButton } from "@mui/material";
import StoreIcon from "@mui/icons-material/Store";
// import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
// import CloseRoundedIcon from "@mui/icons-material/CloseRounded";


const MuiNavbar = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <StoreIcon />
        </IconButton>
        <IconButton
          size="large"
          edge="end"
          color="inherit"
          aria-label="nav-menu-button"
          sx={{ display: { lg: "none" } }}
          // onClick={() => setIsOpen(!isOpen)}
        >
          {/* {isOpen ? <CloseRoundedIcon /> : <MenuRoundedIcon />} */}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default MuiNavbar;
