import PropTypes from 'prop-types'
import { IconButton, Box, Button, Typography } from "@mui/material";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

import { useSelector, useDispatch } from 'react-redux';
import { handleFavorites } from '../redux/reducers/favoriteSlice';
import { saveCart } from '../redux/reducers/cartSlice';
import { setSnackbarOpen } from "../redux/reducers/interfaceSlice";

import AutohideSnackbar from "./Snackbar";

const CardButtons = ({ properIcons, id }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const favoritesProducts = useSelector(
    (state) => state.favorites.favoritesProducts
  );
  const cartProducts = useSelector((state) => state.cart.cartProducts);
  const favoritesStatus = useSelector(
    (state) => state.favorites.favoritesStatus
  );
  const isFavorite = favoritesStatus[id] || false;

  const handleFavorite = (id) => {
    if (!user) {
      dispatch(setSnackbarOpen("Zaloguj się, aby dodać do ulubionych"));
    } else {
      const updatedFavoritesProducts = favoritesProducts.includes(id)
        ? favoritesProducts.filter((itemId) => itemId !== id)
        : [...favoritesProducts, id];

      const updatedFavoritesStatus = { ...favoritesStatus };

      if (updatedFavoritesStatus[id]) {
        delete updatedFavoritesStatus[id];
      } else {
        updatedFavoritesStatus[id] = true;
      }
      dispatch(
        handleFavorites({
          userId: user.uid,
          favoritesProducts: updatedFavoritesProducts,
          favoritesStatus: updatedFavoritesStatus,
        })
      );
    }
  };
  const handleCart = () => {
    if (!user) {
      dispatch(setSnackbarOpen("Zaloguj się, aby dodać do koszyka"));
    } else if (user && !cartProducts.includes(id)) {
      dispatch(
        saveCart({ userId: user.uid, cartProducts: [...cartProducts, id] })
      );
    }
  };
  return (
    <>
      {properIcons === "favorite" && (
        <>
          {user ? (
            <IconButton
              sx={{ color: "primary.main" }}
              onClick={() => handleFavorite(id)}
            >
              {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </IconButton>
          ) : (
            <>
              <IconButton
                sx={{ color: "primary.main" }}
                onClick={() => handleFavorite(id)}
              >
                <FavoriteBorderIcon />
              </IconButton>
            <AutohideSnackbar />
            </>
          )}
        </>
      )}
      {properIcons === "both" && (
        <>
          {user ? (
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}
            >
              <Button
                variant="outlined"
                sx={{ flex: 3, p: 1.5 }}
                onClick={handleCart}
              >
                <ShoppingBagOutlinedIcon sx={{ mr: 2 }} />
                <Typography>Add to Cart</Typography>
              </Button>
              <Button
                variant="outlined"
                sx={{ flex: 0, p: 1.5, ml: 1 }}
                onClick={() => handleFavorite(id)}
              >
                {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
              </Button>
            </Box>
          ) : (
            <Box
              sx={{ display: "flex", mt: 3 }}
            >
             
                <Button
                  variant="outlined"
                  sx={{ flex: 3, p: 1.5}}
                  onClick={handleCart}
                >
                  <ShoppingBagOutlinedIcon sx={{ mr: 2 }} />
                  <Typography>Add to Cart</Typography>
                </Button>
            
           
                <Button
                  variant="outlined"
                  sx={{ flex: 0, p: 1.5, ml: 1 }}
                  onClick={() => handleFavorite(id)}
                >
                  <FavoriteBorderIcon />
                </Button>
            <AutohideSnackbar />
            </Box>
          )}
        </>
      )}
    </>
  );
};


CardButtons.propTypes = {
  properIcons: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default CardButtons;
