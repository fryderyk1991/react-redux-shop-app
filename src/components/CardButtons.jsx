import { IconButton } from "@mui/material";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

const CardButtons = () => {
  return (
    <>
      <IconButton sx={{ color: 'primary.main'}}>
        <FavoriteBorderIcon />
      </IconButton>
      <IconButton sx={{ color: 'primary.main' }}>
        <ShoppingBagOutlinedIcon />
      </IconButton>
    </>
  );
};

export default CardButtons;
