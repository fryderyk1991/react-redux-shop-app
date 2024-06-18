import PropTypes from 'prop-types'
import { IconButton, Box, Button, Typography } from "@mui/material";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

import { useSelector, useDispatch } from 'react-redux';
import { toggleFavorite } from '../redux/reducers/favoriteSlice';
import { saveCart } from '../redux/reducers/cartSlice';


import { useNavigate } from 'react-router-dom';

const CardButtons = ( { properIcons, id } ) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);
  const favoritesProducts = useSelector(state => state.favorites.favoritesProducts)
  const cartProducts = useSelector(state => state.cart.cartProducts)
  const isFavorite = favoritesProducts.some(product => product.id === id && product.favoritesStatus);
  const navigate = useNavigate()


  const handleFavorite = () => {
    if(!user) {
      navigate('/auth/login')
    }
    else {
      dispatch(toggleFavorite(id))
      // dispatch(saveFavorites({userId: user.uid, favoritesProducts: [ ...favoritesProducts, id]}))
    }
  }
  const handleCart = () => {
    if (!user) {
      navigate('/auth/login')
    }
    else {
      dispatch(saveCart({ userId: user.uid,  cartProducts: [ ...cartProducts, id]}));
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
