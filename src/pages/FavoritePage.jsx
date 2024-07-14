import { useSelector } from "react-redux"

import {matchProductsWithId} from "../helpers/matchProductWithId";
import { useEffect, useState } from "react";

import { Container, Box } from "@mui/material";

import GridContainer from '../components/GridContainer';
import MessageComponent from '../components/MessageComponent';
import LoadCircle from "../components/LoadCircle";

const FavoritePage = () => {
  const [favorites, setFavorites] = useState([]);
  // const products = useSelector(state => state.products.productsData);
  const { productsData, loading } = useSelector((state) => state.products);
  const favoritesIdArray = useSelector(state => state.favorites.favoritesProducts)

 
  
  useEffect(() => {
    const filterFavorites = matchProductsWithId(productsData, favoritesIdArray);
    setFavorites(filterFavorites)
  }, [productsData, favoritesIdArray])
  
  return (
    <Container >
      {loading && favorites.length === 0 ? (
         <Box
         sx={{
           display: "flex",
           justifyContent: "center",
           alignItems: "center",
           minHeight: "100vh",
         }}
       >
         <LoadCircle size={32} />
       </Box>
      ) : (
        <GridContainer gridItems={favorites} />
      )}
      <>
      {!loading && favorites.length === 0 && (
        <MessageComponent text={"You haven't liked any products yet"}/>
      )}
      
      </>  
    </Container>
 
  )
}

export default FavoritePage