import {Box, Modal, Typography, Fade, Backdrop} from '@mui/material';

import { useSelector, useDispatch } from 'react-redux';
import { setModalClose } from '../redux/reducers/interfaceSlice';
import { clearCartAfterOrder } from '../redux/reducers/cartSlice';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: 360,
  bgcolor: 'background.paper',
  boxShadow: 28,
  p: 4,
  textAlign: 'center'
};

const TransitionsModal = () =>  {
  const { modalIsOpen, modalCartTotalPrice } = useSelector(state => state.interface);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const handleCartAndModal = () => {
    dispatch(setModalClose());
    dispatch(clearCartAfterOrder({userId: user.uid}))
  }
  return (
    <div>
      <Modal 
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={modalIsOpen}
        onClose={handleCartAndModal}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={modalIsOpen}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h5" component="h2">
            Thank you for your order!
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
            Total price for your order: ${modalCartTotalPrice}
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}


export default TransitionsModal;