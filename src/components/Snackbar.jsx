import Snackbar from '@mui/material/Snackbar';
import SnackbarContent from '@mui/material/SnackbarContent';
import { Button, Typography, Box } from '@mui/material';

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../../firebase/firebaseConfig'
import { useNavigate } from "react-router-dom";

import { setSnackbarClose } from '../redux/reducers/interfaceSlice';
import { setLoading, LoginUser } from "../redux/reducers/userSlice";
import { useDispatch, useSelector } from 'react-redux';

const AutohideSnackbar = () => {
    const { snackbarIsOpen, snackbarMessage } = useSelector(state => state.interface)
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleGoogle = async () => {
        const provider = new GoogleAuthProvider();
        try {
          const result = await signInWithPopup(auth, provider);
          const loggedUser = result.user; 
          dispatch(
            LoginUser({
              uid: loggedUser.uid,
              name: loggedUser.displayName,
              email: loggedUser.email,
            }))
            dispatch(setLoading(true))
            navigate('/')
        } catch(error) {
          console.error("Error during sign-in with Google", error)
        } finally {
          dispatch(setLoading(false))
        }
    
      }

  return (
    <div>
       <Snackbar 
       elevation={6}
                open={snackbarIsOpen}
                autoHideDuration={3000}
                onClose={() => dispatch(setSnackbarClose())}
            >
                <SnackbarContent 
                    message={
                        <Box sx={{display: 'flex', alignItems: 'center'}}>
                            <Typography variant='subtitle' sx={{ color: '#fff'}}>{snackbarMessage}</Typography>
                            <Button onClick={handleGoogle} variant='outlined' sx={{ ml: 2 }}>Sign in</Button>
                        </Box>
                        
                    }
                />
            </Snackbar>
    </div>
  );
};


export default AutohideSnackbar;