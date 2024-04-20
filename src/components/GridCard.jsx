import PropTypes from 'prop-types'

import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
} from "@mui/material";

import CardButtons from './CardButtons';

const GridCard = ({ src, title, price }) => {
  return (
      <Card sx={{ maxWidth: 350, height: '100%', display: 'flex', flexDirection: 'column'}}>
        <CardMedia component="img" image={src} alt={title}/>
        <CardContent sx={{ p: 1, flex: 1}}>
          <Typography variant="subtitle1" fontWeight={500}>
            {title}
          </Typography>
          <Typography variant="body1" fontWeight={500} mt={1}>
            {price},00$
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'space-between'}}>
          <CardButtons properIcons={'favorite'}/>
        </CardActions>
      </Card>
  );
};

GridCard.propTypes = {
  src: PropTypes.string.isRequired, 
  title: PropTypes.string.isRequired, 
  price: PropTypes.number.isRequired,
};

export default GridCard