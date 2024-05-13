import Header from './components/Header';
import MobileNav from './components/MobileNav';
import Footer from './components/Footer';

import { Outlet } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material';

import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { isLoading, LoginUser } from './redux/reducers/userSlice';
import { fetchProducts } from './redux/reducers/productsSlice';

import { auth } from '../firebase/firebaseConfig';


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
  const user = useSelector(state => state.user.user);
  const dispatch = useDispatch();

  console.log(user)
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch])
  
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if(authUser) {
        dispatch(LoginUser({
          uid: authUser.uid,
          username: authUser.displayName,
          email: authUser.email,
        })
      )}
    })
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
