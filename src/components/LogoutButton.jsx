import { ListItem, ListItemButton, ListItemIcon, Typography } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

import { auth } from "../../firebase/firebaseConfig";
import { signOut } from "firebase/auth";

import { LogoutUser, setLoading } from "../redux/reducers/userSlice";
import { setClose } from "../redux/reducers/interfaceSlice";

import { useDispatch } from "react-redux";

const LogoutButton = () => {
  const dispatch = useDispatch();

  const handleSignout = async () => {
    dispatch(setLoading(true))
    try {
      await signOut(auth);
      dispatch(LogoutUser());
      dispatch(setClose())
    } catch (error) {
      console.log(error);
    }
    finally {
      dispatch(setLoading(false))
    }
  };

  return (
    <ListItem disablePadding sx={{ mt: { xs: 8, md: 0 }}}>
      <ListItemButton onClick={handleSignout}>
        <ListItemIcon sx={{ color: 'primary.main', minWidth: '40px' }}>
          <LogoutIcon />
        </ListItemIcon>
        <Typography sx={{ color: '#000', fontWeight: 500 }}>Logout</Typography>
      </ListItemButton>
    </ListItem>
  );
};

export default LogoutButton;
