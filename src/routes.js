import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import FavoritePage from "./pages/FavoritePage";

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

export const routes = [
  { name: "Home", path: "", element: HomePage, icon: HomeOutlinedIcon },
  { name: "Contact", path: "contact", element: ContactPage, icon: EmailOutlinedIcon },
  { name: "Favorite", path: "favorite", element: FavoritePage, icon: FavoriteBorderOutlinedIcon },
];