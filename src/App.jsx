import Header from './components/Header';
import MobileNav from './components/MobileNav';
import Footer from './components/Footer';

import { Outlet } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, Box } from '@mui/material';
import { theme } from './theme';

import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { setLoading, LoginUser } from './redux/reducers/userSlice';
import { fetchProducts } from './redux/reducers/productsSlice';
import { clearFavorites } from './redux/reducers/favoriteSlice';

import { auth } from '../firebase/firebaseConfig';
import { onAuthStateChanged } from "firebase/auth";
import { clearCart, fetchCart } from './redux/reducers/cartSlice';
import { fetchFavorites } from './redux/reducers/favoriteSlice';

import AutohideSnackbar from './components/Snackbar';
import TransistionsModal from './components/Modal'

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(setLoading(true))
  }, [dispatch])
  

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        dispatch(
          LoginUser({
            uid: authUser.uid,
            name: authUser.displayName,
            email: authUser.email,
          })
        );
        dispatch(fetchCart(authUser.uid))
        dispatch(fetchFavorites(authUser.uid))
        dispatch(setLoading(false))
      }
      else {
        dispatch(clearFavorites())
        dispatch(clearCart())
        dispatch(setLoading(false))
      }
    });
    return () => unsubscribe()
  }, [dispatch])

  return (
    <ThemeProvider theme={theme}>
    <CssBaseline /> 
    <Box sx={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
    <Header/>
    <MobileNav />
    <Outlet/>
    <TransistionsModal />
    <AutohideSnackbar />
    </Box>
    <Footer />
    </ThemeProvider>
  );
}

export default App;
