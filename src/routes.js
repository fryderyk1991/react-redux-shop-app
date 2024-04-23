import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import FavoritePage from "./pages/FavoritePage";

import FavoriteIcon from '@mui/icons-material/Favorite';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';

export const routes = [
  { name: "Home", path: "", element: HomePage, icon: HomeIcon },
  { name: "Contact", path: "contact", element: ContactPage, icon: EmailIcon },
  { name: "Favorite", path: "favorite", element: FavoritePage, icon: FavoriteIcon },
];