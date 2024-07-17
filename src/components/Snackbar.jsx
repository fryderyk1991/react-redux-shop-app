import { Button, Typography, Box, Snackbar, SnackbarContent } from '@mui/material';

import SiginGoogle from './SiginGoogle';

import { setSnackbarClose } from '../redux/reducers/interfaceSlice';
import { useDispatch, useSelector } from 'react-redux';

const AutohideSnackbar = () => {
    const { snackbarIsOpen, snackbarMessage } = useSelector(state => state.interface)
    const dispatch = useDispatch();

  return (
    <div>
       <Snackbar
       elevation={6}
                open={snackbarIsOpen}
                autoHideDuration={3000}
                onClose={() => dispatch(setSnackbarClose())}
            >
                <SnackbarContent sx={{ p: 1}}
                    message={
                        <Box sx={{display: 'flex', alignItems: 'center'}}>
                            <Typography variant='subtitle' sx={{ color: '#fff', mr: 2}}>{snackbarMessage}</Typography>
                            <SiginGoogle>
                            <Button variant='outlined'>Sign in</Button>
                            </SiginGoogle>
                        </Box>
                        
                    }
                />
            </Snackbar>
    </div>
  );
};


export default AutohideSnackbar;