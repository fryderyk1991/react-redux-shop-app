import { Typography, Box, Container } from "@mui/material";
import {  useRouteError, useNavigate } from "react-router-dom";
import BasicButton from "../components/Button";

const ProductsError = () => {
    const error = useRouteError();
    const navigate = useNavigate()
  return (
    <Container sx={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
      <Box>
      <Typography variant="h3" component='p' sx={{mb: 4}}>{error.message}</Typography>
      <BasicButton value={'Go Home'} onClick={() => navigate('/')}/>
      </Box>
    </Container>
  )
}

export default ProductsError