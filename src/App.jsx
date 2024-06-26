import Header from './components/Header';
import MobileNav from './components/MobileNav';
import Footer from './components/Footer';

import { Outlet } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider, Box } from '@mui/material';

import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { setLoading, LoginUser } from './redux/reducers/userSlice';
import { fetchProducts } from './redux/reducers/productsSlice';
import { clearFavorites } from './redux/reducers/favoriteSlice';

import { auth } from '../firebase/firebaseConfig';
import { onAuthStateChanged } from "firebase/auth";
import { clearCart, fetchCart } from './redux/reducers/cartSlice';
import { fetchFavorites } from './redux/reducers/favoriteSlice';


  

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffac33',
      dark: '#212121'
    },
    secondary: {
      main: '#bdbdbd',
    }
  },
  typography: {
    allVariants: {
      color: '#212121'
    },
    fontFamily: 'Quicksand',
    h6: {
      fontFamily: 'Rosarivo',
    }
    
  },
})

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
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
        console.log('The user is not logged in')
        dispatch(clearFavorites())
        dispatch(clearCart())
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
    <Outlet />
    </Box>
    <Footer />
    </ThemeProvider>
  );
}

export default App;
