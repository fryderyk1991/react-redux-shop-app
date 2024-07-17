import { AppBar, Toolbar, Typography, IconButton, Box} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { motion } from "framer-motion";

import { Link as ReactRouterLink } from "react-router-dom";

import BurgerBtn from "./BurgerBtn";
import DesktopNav from "./DesktopNav";
import SiginGoogle from "./SiginGoogle";
import LogoutButton from "./LogoutButton";
import LoadCircle from "./LoadCircle";

import { useSelector } from "react-redux";

const Header = () => {
  const { user, isLoading } = useSelector((state) => state.user);

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
          sx={{ textDecoration: "none", flex: 1 }}
        >
          SFJ
        </Typography>
        <DesktopNav />
        <>
          {isLoading ? (
            <LoadCircle size={20} />
          ) : user ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <IconButton size="large" sx={{ color: "primary.main" }}>
                  <PersonIcon />
                </IconButton>
                <Typography
                  variant="body1"
                  component="span"
                  sx={{ fontWeight: 500, color: "#000" }}
                >
                  {user.name}
                </Typography>
                <Box sx={{ display: { md: "block", xs: "none", sm: "none"},  ml: {md: 2} }}>
                  <LogoutButton />
                </Box>
              </Box>
            </motion.div>
          ) : (
            <SiginGoogle>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <IconButton size="large">
                  <PersonIcon />
                </IconButton>
              </motion.div>
            </SiginGoogle>
          )}
        </>
        <BurgerBtn />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
