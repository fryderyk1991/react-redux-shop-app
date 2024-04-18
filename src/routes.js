import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";

export const routes = [
    {   name: 'Home',
        path: '',
        element: HomePage
    },
    {   name: 'Contact',
        path: "contact",
        element: ContactPage,
      },
]