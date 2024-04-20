import PropTypes from 'prop-types'
import { IconButton } from "@mui/material";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

const CardButtons = ( { properIcons } ) => {
 
  return ( 
   <>
   {properIcons === 'favorite' && (
        <IconButton sx={{ color: 'primary.main'}}>
          <FavoriteBorderIcon />
        </IconButton>
      )}
      {properIcons === 'both' && (
        <>
          <IconButton sx={{ color: 'primary.main'}}>
            <FavoriteBorderIcon />
          </IconButton>
          <IconButton sx={{ color: 'primary.main' }}>
            <ShoppingBagOutlinedIcon />
          </IconButton>
        </>
      )}
      </> 

  );
};


CardButtons.propTypes = {
  properIcons: PropTypes.string.isRequired,
};

export default CardButtons;
