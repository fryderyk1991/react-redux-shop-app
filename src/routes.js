import HomePage from "./pages/HomePage";
import FavoritePage from "./pages/FavoritePage";
import CartPage from "./pages/CartPage";

import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


export const routes = [
  { name: "Home", path: "", element: HomePage, icon: HomeIcon },
  { name: "Favorite", path: "favorite", element: FavoritePage, icon: FavoriteIcon},
  { name: "Cart", path: 'cart', element: CartPage, icon: ShoppingCartIcon}
];