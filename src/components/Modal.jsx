import PropTypes from "prop-types";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
// import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";

import { useSelector, useDispatch } from "react-redux";
import { setModalClose } from "../redux/reducers/interfaceSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const TransitionsModal = ({ children }) => {
  const { modalIsOpen, modalMessage } = useSelector((state) => state.interface);
  const dispatch = useDispatch();

  return (
    <div>
      <div>{children}</div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={modalIsOpen}
        onClose={() => dispatch(setModalClose())}
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
            <Typography>{modalMessage}</Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

TransitionsModal.propTypes = {
  children: PropTypes.object.isRequired,
};

export default TransitionsModal;
