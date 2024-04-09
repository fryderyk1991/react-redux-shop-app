import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

import { useEffect } from 'react';
import {useDispatch} from 'react-redux';
import { fetchProducts } from './redux/reducers/productsSlice';

function App() {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  return (
    <> 
    <Header/>
    <Outlet />
    <Footer />
    </>
  );
}

export default App;
