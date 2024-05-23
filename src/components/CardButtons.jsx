import PropTypes from 'prop-types'
import { IconButton, Box, Button, Typography } from "@mui/material";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

import { useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const CardButtons = ( { properIcons } ) => {
  const user = useSelector(state => state.user.user);
  const [isFavorite, setIsFavorite] = useState(false)
  const navigate = useNavigate()

  const handleFavorite = () => {
    if(!user) {
      navigate('/auth/login')
    }
    else {
      setIsFavorite(!isFavorite)
    }
  }
  const handleCart = () => {
    if (!user) {
      navigate('/auth/login')
    }
    else {
      console.log('user może dodać do koszyka')
    }
  }
  return ( 
   <>
   {properIcons === 'favorite' && (
        <IconButton sx={{ color: 'primary.main'}} onClick={handleFavorite} >
          {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>
      )}
      {properIcons === 'both' && (
        <Box sx={{display: 'flex', justifyContent: 'space-between', mt: 3}}>
            <Button variant='outlined' sx={{ flex: 3, p: 1.5}} onClick={handleCart}> 
            <ShoppingBagOutlinedIcon sx={{ mr:  2 }} />
            <Typography>Add to Cart</Typography> 
            </Button>
          <Button variant='outlined' sx={{ flex: 0, p: 1.5, ml: 1}} onClick={handleFavorite}>
          {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
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
