import { CircularProgress, Box } from "@mui/material"

const LoadCircle = () => {
  return (
    <Box sx={{ display: 'flex', minHeight: '50vh', justifyContent: 'center', alignItems: 'center'}}>
    <CircularProgress />
    </Box>
  )
}

export default LoadCircle