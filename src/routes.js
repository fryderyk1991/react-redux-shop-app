import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import FavoritePage from "./pages/FavoritePage";

export const routes = [
  { name: "Home", path: "", element: HomePage },
  { name: "Contact", path: "contact", element: ContactPage },
  { name: "Favorite", path: "favorite", element: FavoritePage },
];