import PropTypes from 'prop-types'
import { IconButton, Box, Button, Typography } from "@mui/material";

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
        <Box sx={{display: 'flex', justifyContent: 'space-between', mt: 3}}>
            <Button variant='outlined' sx={{ flex: 3, p: 1.5}}>
            <ShoppingBagOutlinedIcon sx={{ mr:  2 }} />
            <Typography >Add to Cart</Typography> 
            </Button>
          <Button variant='outlined' sx={{ flex: 0, p: 1.5, ml: 1 }}>
          <FavoriteBorderIcon />
          </Button>
        </Box>
      )}
      </> 

  );
};


CardButtons.propTypes = {
  properIcons: PropTypes.string.isRequired,
};

export default CardButtons;
