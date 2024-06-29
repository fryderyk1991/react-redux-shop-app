import PropTypes from 'prop-types'
import { Box, Typography } from "@mui/material";

const MessageComponent = ( {text} ) => {
  return (
    <Box sx={{ minHeight: '100vh', alignContent: 'center'}}>
        <Typography sx={{ textAlign: 'center', fontWeight: '400', opacity: 0.8}} variant="h2">{text}</Typography>
    </Box>
  )
}

MessageComponent.propTypes = {
    text: PropTypes.string.isRequired,
}

export default MessageComponent;