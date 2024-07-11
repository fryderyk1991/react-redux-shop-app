import PropTypes from 'prop-types'
import { Button } from '@mui/material'

const BasicButton = ( { value, onClick } ) => {
  return (
    <Button onClick={onClick} variant='outlined'>{value}</Button>
  ) 
}

BasicButton.propTypes = {
    value: PropTypes.string.isRequired,
    onClick: PropTypes.func
}

export default BasicButton