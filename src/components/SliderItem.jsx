import PropTypes from 'prop-types'
import { Paper, Button, CardMedia } from '@mui/material'

const SliderItem = ( { src } ) => {
    return (
        <Paper>
            <CardMedia component="img" image={src}/>
            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}

SliderItem.propTypes = {
    src: PropTypes.string.isRequired,  
  };

export default SliderItem