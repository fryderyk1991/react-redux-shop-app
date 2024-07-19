import * as React from 'react';
import {Box, Modal, Button, Typography} from '@mui/material'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 28,
  p: 4,
  textAlign: 'center'
};

export default function KeepMountedModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography id="keep-mounted-modal-title" variant="h5" component="h2">
          Thank you for your order!
          </Typography>
          <Typography id="keep-mounted-modal-description" sx={{ mt: 3 }}>
            Total price for your order: 150
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}