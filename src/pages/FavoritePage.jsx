import { useSelector } from "react-redux"

import {matchProductsWithId} from "../helpers/matchProductWithId";
import { useEffect, useState } from "react";

import { Container } from "@mui/material";

import GridContainer from '../components/GridContainer'

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
         <GridContainer gridItems={favorites} />
    </Container>
 
  )
}

export default FavoritePage