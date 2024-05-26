import PropTypes from 'prop-types'

import { Grid } from "@mui/material";
import GridCard from "./GridCard";




const GridContainer = ( { gridItems }) => {    
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

GridContainer.propTypes = {
  gridItems: PropTypes.array.isRequired,
};

export default GridContainer;
 