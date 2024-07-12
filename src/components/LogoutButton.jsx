import { IconButton, Box, Typography } from "@mui/material";
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
    <div onClick={handleSignout}>
      <Box  sx={{ width: "100%", ml: 1, display: "flex", alignItems: "center", cursor: 'pointer' }}>
        <IconButton size="large" sx={{ color: 'primary.main'}}>
          <LogoutIcon  />
        </IconButton>
        <Typography sx={{ color: '#000', fontWeight: 500}}>Logout</Typography>
      </Box>
    </div>
  );
};

export default LogoutButton;
