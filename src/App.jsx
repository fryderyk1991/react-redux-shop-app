import MuiNavbar from './components/MuiNavbar';
import MuiMobileMenu from './components/MuiMobileMenu';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';

// import { useEffect } from 'react';
// import {useDispatch} from 'react-redux';
// import { fetchProducts } from './redux/reducers/productsSlice';

function App() {
  // const dispatch = useDispatch();


  // useEffect(() => {
  //   dispatch(fetchProducts())
  // }, [dispatch])

  return (
    <>
    <CssBaseline />
    <MuiNavbar/>
    <MuiMobileMenu />
    <Outlet />
    <Footer />
    </>
  );
}

export default App;
