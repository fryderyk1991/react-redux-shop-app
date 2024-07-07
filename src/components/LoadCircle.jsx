import PropTypes from 'prop-types'
import { CircularProgress } from "@mui/material"

const LoadCircle = ({size}) => {
  return (
    <CircularProgress size={size} />
  )
}

LoadCircle.propTypes = {
  size: PropTypes.number.isRequired
} 

export default LoadCircle