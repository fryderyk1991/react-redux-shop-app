import { Typography, Box, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import BasicButton from "../components/Button";

const NotFoundPage = () => {
  const navigate = useNavigate()
  return (
    <Container sx={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
      <Box>
      <Typography variant="h1" component='p' sx={{ fontWeight: 300 }}>404</Typography>
      <Typography variant="h3" component='p'>Page not found</Typography>
      <Typography variant="body1" sx={{my: 2}}>Oops! The page you&apos;re looking for can&apos;t be found.</Typography>
      <BasicButton value={'Go Home'} onClick={() => navigate('/')}/>
      </Box>
    </Container>
  );
};

export default NotFoundPage;
