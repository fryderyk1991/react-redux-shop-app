import PropTypes from 'prop-types'

import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";

const GridCard = ({ src, title }) => {
  return (
      <Card sx={{ maxWidth: 350, height: '100%' }}>
        <CardMedia component="img" image={src}/>
        <CardContent sx={{ p: 1}}>
          <Typography variant="caption">
            {title}
          </Typography>
        </CardContent>
        <CardActions>
          {/* <Button size="small">Share</Button>
          <Button size="small">Learn More</Button> */}
        </CardActions>
      </Card>
  );
};

GridCard.propTypes = {
  src: PropTypes.string.isRequired, 
  title: PropTypes.string.isRequired, 
};

export default GridCard