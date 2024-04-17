import { Grid } from "@mui/material";

import { useSelector } from "react-redux";
import GridCard from "./GridCard";

const GridContainer = () => {    
  
  const gridItems = useSelector(state => state.products.productsData); 
  const startIndex = 2;
  const endIndex = 51;

  const slicedArray = gridItems.slice(startIndex, endIndex)


  return (
    <Grid container my={5} direction='column' alignItems="center" justifyContent="space-around">
        {slicedArray.map((item) => (
            <GridCard key={item.id} src={item.images[0]} title={item.title} />
        ))}

    </Grid>
  );
};

export default GridContainer;
