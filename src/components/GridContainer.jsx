import { Grid } from "@mui/material";

import { useSelector } from "react-redux";
import GridCard from "./GridCard";

const GridContainer = () => {    
  const gridItems = useSelector(state => state.products.productsData); 

  return (
    <Grid container my={5} direction='column' alignItems="center" justifyContent="space-around">
        {gridItems.map((item) => (
            <GridCard key={item.id} src={item.images[0]} title={item.title} />
        ))}

    </Grid>
  );
};

export default GridContainer;
