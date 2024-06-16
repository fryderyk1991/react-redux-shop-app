import { AppBar, Toolbar, Typography } from "@mui/material";

import { Link as ReactRouterLink } from "react-router-dom";

import BurgerBtn from "./BurgerBtn";
import DesktopNav from "./DesktopNav";

import { auth } from "../../firebase/firebaseConfig";
import { signOut } from "firebase/auth";

import { useSelector, useDispatch } from "react-redux";
import { LogoutUser } from "../redux/reducers/userSlice";

const Header = () => {
  const user = useSelector(state => state.user.user)
  const dispatch = useDispatch()
  
  const handleSignout = async () => {
    try {
      await signOut(auth)
      dispatch(LogoutUser())
    } catch(error) {
      console.log(error)
    }
  } 

  return (
    <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none'}}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" aria-label="logo" component={ReactRouterLink} to='/' sx={{ textDecoration: 'none'}}>SFJ</Typography>
        <DesktopNav />
      <BurgerBtn />
      {/* tu stworzyc konto */}
        {user && (
          <>
          <strong>{user.name}</strong>
          <button onClick={handleSignout}>Logout</button>
          </>
        )}
        
      </Toolbar>
    </AppBar>
  );
};

export default Header;
