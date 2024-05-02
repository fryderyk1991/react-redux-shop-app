import { Grid } from "@mui/material";

import { useSelector } from "react-redux";
import GridCard from "./GridCard";


const GridContainer = () => {    
  const gridItems = useSelector(state => state.products.productsData); 
  // const startIndex = 2;
  // const stopIndex = 41;
  // const realData = gridItems.slice(startIndex, stopIndex);

  return (
    <Grid container spacing={1} sx={{ my: 4 }}>
        {gridItems.map((item) => (
            <Grid item key={item.id} xs={6} sm={4} md={3}>
                <GridCard src={item.images[0]} title={item.title} price={item.price} id={item.id} />
            </Grid>
        ))}
    </Grid>
  );
};

export default GridContainer;
