import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import FavoritePage from "./pages/FavoritePage";
import CartPage from "./pages/CartPage";
import AuthenticationPage from "./pages/AuthenticationPage";

import FavoriteIcon from '@mui/icons-material/Favorite';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';

export const routes = [
  { name: "Sign In", path: "auth", element: AuthenticationPage, icon: PersonIcon },
  { name: "Home", path: "", element: HomePage, icon: HomeIcon },
  { name: "Contact", path: "contact", element: ContactPage, icon: EmailIcon },
  { name: "Favorite", path: "favorite", element: FavoritePage, icon: FavoriteIcon},
  { name: "Cart", path: 'cart', element: CartPage, icon: ShoppingCartIcon}
];