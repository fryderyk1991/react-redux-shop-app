
import Snackbar from '@mui/material/Snackbar';

import { setSnackbarClose } from '../redux/reducers/interfaceSlice';
import { useDispatch, useSelector } from 'react-redux';

const AutohideSnackbar = () => {
    const { snackbarIsOpen, snackbarMessage } = useSelector(state => state.interface)
    const dispatch = useDispatch();

  return (
    <div>
      <Snackbar elevation={0}
        open={snackbarIsOpen}
        autoHideDuration={5000}
        onClose={() => dispatch(setSnackbarClose())}
        message={
          <>
          <span>{snackbarMessage}</span>
          <button>Zaloguj</button>
          </>
        }
        sx={{
            '& .MuiSnackbarContent-root': {
                boxShadow: 'none'
            }
        }}
      />
    </div>
  );
};


export default AutohideSnackbar;