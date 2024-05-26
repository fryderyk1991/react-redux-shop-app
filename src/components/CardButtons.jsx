import PropTypes from 'prop-types'
import { IconButton, Box, Button, Typography } from "@mui/material";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

import { useSelector, useDispatch } from 'react-redux';
import { toggleFavorite } from '../redux/reducers/favoriteSlice';
import { addProduct } from '../redux/reducers/cartSlice';

import { useNavigate } from 'react-router-dom';

const CardButtons = ( { properIcons, id } ) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);
  const favoritesStatus = useSelector(state => state.favorites.favoritesStatus);
  const isFavorite = favoritesStatus[id] || false;
  const navigate = useNavigate()

  const handleFavorite = () => {
    if(!user) {
      navigate('/auth/login')
    }
    else {
      dispatch(toggleFavorite(id))
    }
  }
  const handleCart = () => {
    if (!user) {
      navigate('/auth/login')
    }
    else {
      dispatch(addProduct(id))
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
  id: PropTypes.number.isRequired,
};

export default CardButtons;
