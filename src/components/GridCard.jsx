import PropTypes from 'prop-types'

import { Card, CardMedia, CardContent, CardActions, Typography, Button } from "@mui/material"

const GridCard = ({src, title}) => {
  return (
    <Card sx={{ maxWidth: 400}}>
      <CardMedia
      component="img"
      image={src}
      alt=""
   />
     <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
}

GridCard.propTypes = {
  src: PropTypes.string.isRequired, 
  title: PropTypes.string.isRequired, 
};

export default GridCard