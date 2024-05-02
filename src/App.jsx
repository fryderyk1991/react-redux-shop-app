import Header from './components/Header';
import MobileNav from './components/MobileNav';
import Footer from './components/Footer';

import { Outlet } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProducts } from './redux/reducers/productsSlice';


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
