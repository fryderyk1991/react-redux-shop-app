import Snackbar from '@mui/material/Snackbar';
import SnackbarContent from '@mui/material/SnackbarContent';


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
                autoHideDuration={5000}
                onClose={() => dispatch(setSnackbarClose())}
                // sx={{
                //     '& .MuiSnackbarContent-root': {
                //         boxShadow: 'none'
                //     }
                // }}
            >
                <SnackbarContent
                    message={
                        <div>
                            <span>{snackbarMessage}</span>
                            <button>Zaloguj</button>
                        </div>
                    }
                />
            </Snackbar>
            </div>
  );
};


export default AutohideSnackbar;