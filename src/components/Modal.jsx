import PropTypes from "prop-types";
// import Box from "@mui/material/Box";
// import Modal from "@mui/material/Modal";
// // import Button from '@mui/material/Button';
// import Typography from "@mui/material/Typography";

// import { useSelector, useDispatch } from "react-redux";
// import { setModalClose } from "../redux/reducers/interfaceSlice";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 300,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
// };

// const TransitionsModal = ({ children }) => {
//   const { modalIsOpen, modalMessage } = useSelector((state) => state.interface);
//   const dispatch = useDispatch();

//   return (
//     <div>
//       <div>{children}</div>
//       <Modal sx={{ opacity: 0.8}}
//         aria-labelledby="transition-modal-title"
//         aria-describedby="transition-modal-description"
//         open={modalIsOpen}
//         onClose={() => dispatch(setModalClose())}
//       >
//           <Box sx={style}>
//             <Typography>{modalMessage}</Typography>
//           </Box>
//       </Modal>
//     </div>
//   );
// };



// export default TransitionsModal;

import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const BasicModal = ({children}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div onClick={handleOpen}>{children}</div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

BasicModal.propTypes = {
  children: PropTypes.object.isRequired,
};

export default BasicModal;