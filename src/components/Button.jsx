import PropTypes from 'prop-types'
import { Button } from '@mui/material'

const BasicButton = ( { value, onClick, width } ) => {
  return (
    <Button onClick={onClick} sx={{width: width}} variant='outlined'>{value}</Button>
  ) 
}

BasicButton.propTypes = {
    value: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    width: PropTypes.string
}

export default BasicButton