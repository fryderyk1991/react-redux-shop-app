import { Grid } from "@mui/material";

import { useSelector } from "react-redux";
import GridCard from "./GridCard";

const GridContainer = () => {    
  const gridItems = useSelector(state => state.products.productsData); 
  // const startIndex = 1;
  // const endIndex = 51;

  // const slicedArray = gridItems.slice(startIndex, endIndex)
  // console.log(slicedArray)

  return (
    <Grid container spacing={1} sx={{ my: 2 }}>
        {gridItems.map((item) => (
            <Grid item key={item.id} xs={6} sm={4} md={3}>
                <GridCard src={item.images[0]} title={item.title} />
            </Grid>
        ))}

    </Grid>
  );
};

export default GridContainer;
