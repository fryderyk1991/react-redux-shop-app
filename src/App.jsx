import Header from './components/Header';
import MobileNav from './components/MobileNav';
import Footer from './components/Footer';

import { Outlet } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material';

import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { setLoading, LoginUser } from './redux/reducers/userSlice';
import { fetchProducts } from './redux/reducers/productsSlice';
import { clearFavorites } from './redux/reducers/favoriteSlice';

import { auth } from '../firebase/firebaseConfig';
import { onAuthStateChanged } from "firebase/auth";
import { clearCart } from './redux/reducers/cartSlice';


  

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
    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        dispatch(
          LoginUser({
            uid: authUser.uid,
            name: authUser.displayName,
            email: authUser.email,
          })
        );
        dispatch(setLoading(false))
      }
      else {
        console.log('The user is not logged in')
        dispatch(clearFavorites())
        dispatch(clearCart())
      }
    });
  }, [dispatch])

  return (
    <ThemeProvider theme={theme}>
    <CssBaseline /> 
    <Header/>
    <MobileNav />
    <Outlet />
    <Footer />
    </ThemeProvider>
  );
}

export default App;
