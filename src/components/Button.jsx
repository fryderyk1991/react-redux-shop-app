import PropTypes from 'prop-types'
import { Button } from '@mui/material'

const BasicButton = ( { value, onClick, variant } ) => {
  return (
    <Button onClick={onClick} variant={variant}>{value}</Button>
  ) 
}

BasicButton.propTypes = {
    value: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    variant: PropTypes.string
}

export default BasicButton