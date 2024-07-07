import { IconButton, Box, Typography } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

import { auth } from "../../firebase/firebaseConfig";
import { signOut } from "firebase/auth";

import { LogoutUser, setLoading } from "../redux/reducers/userSlice";

import { useDispatch } from "react-redux";

const LogoutButton = () => {
  const dispatch = useDispatch();

  const handleSignout = async () => {
    dispatch(setLoading(true))
    try {
      await signOut(auth);
      dispatch(LogoutUser());
    } catch (error) {
      console.log(error);
    }
    finally {
      dispatch(setLoading(false))
    }
  };

  return (
    <div onClick={handleSignout}>
      <Box sx={{ width: "100%", ml: 2, display: "flex", alignItems: "center" }}>
      <IconButton size="small">
        <LogoutIcon />
      </IconButton>
      <Typography sx={{ ml: 1 }}>Logout</Typography>
    </Box>
    </div>
    
  );
};

export default LogoutButton;
