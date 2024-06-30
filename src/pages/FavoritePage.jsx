import { useSelector } from "react-redux"

import {matchProductsWithId} from "../helpers/matchProductWithId";
import { useEffect, useState } from "react";

import { Container } from "@mui/material";

import GridContainer from '../components/GridContainer';
import MessageComponent from '../components/MessageComponent'

const FavoritePage = () => {
  const [favorites, setFavorites] = useState([]);
  const products = useSelector(state => state.products.productsData);
  const favoritesIdArray = useSelector(state => state.favorites.favoritesProducts)

 
  
  useEffect(() => {
    const filterFavorites = matchProductsWithId(products, favoritesIdArray);
    setFavorites(filterFavorites)
  }, [products, favoritesIdArray])
  
  return (
    <Container >
     {favorites.length === 0 ? (
      <MessageComponent text={"You haven't liked any products yet"}/>
     ) : (
      <GridContainer gridItems={favorites} />
     )}
        
    </Container>
 
  )
}

export default FavoritePage