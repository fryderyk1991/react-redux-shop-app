import PropTypes from 'prop-types'

import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Link
} from "@mui/material";



import CardButtons from './CardButtons';
import { useNavigate } from 'react-router-dom';

const GridCard = ({ src, title, price, id }) => {
  const navigate = useNavigate()

  const handleClick = (e) => {
    navigate(`product-details/${e.target.dataset.id}`)
  };

  return (
      <Card sx={{ maxWidth: 350, height: '100%', display: 'flex', flexDirection: 'column'}} >
        <CardMedia component="img" image={src} alt={title} sx={{ cursor: 'pointer'}} onClick={handleClick} data-id={id} data-alias={title}/>
        <CardContent sx={{ p: 1, flex: 1}}>
          <Link variant="body1" component={'p'} fontWeight={500} underline="hover" color='primary.dark' sx={{ cursor: 'pointer'}} onClick={handleClick} data-id={id} data-alias={title}>
            {title}
          </Link>
          <Typography variant="body1" fontWeight={500} mt={1} >
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
  id: PropTypes.number.isRequired,
};

export default GridCard