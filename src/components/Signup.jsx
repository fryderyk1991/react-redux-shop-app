import { Box, FormControl, InputLabel, OutlinedInput, Button, Typography, Link} from '@mui/material';

import { Link as ReactRouterLink } from "react-router-dom";

const Signup = () => {

  return (
    <Box sx={{ textAlign: 'center', my: 5}}>
       <Typography variant="h6" aria-label="logo" fontSize='32px'>SFJ</Typography>
    <Box
    component="form"
    sx={{maxWidth: 300, mx: 'auto', my: 2}}
    noValidate
    autoComplete="off"
  >
    <FormControl sx={{ width: '100%', mb: 1}}>
      <InputLabel htmlFor="email">Email</InputLabel>
      <OutlinedInput
        id="email"
        label="Email"/>
    </FormControl>
    <FormControl  sx={{ width: '100%', mb: 1}}>
      <InputLabel htmlFor="username">Username</InputLabel>
      <OutlinedInput
        id="username"
        label="Username"
        type="text"
      />
    </FormControl>
    <FormControl  sx={{ width: '100%', mb: 1}}>
      <InputLabel htmlFor="password">Password</InputLabel>
      <OutlinedInput
        id="password"
        label="Password"
        type="password"
      />
    </FormControl>
    <Button type='submit' variant='contained' sx={{mt: 2, width: '100%', textTransform: 'capitalize', "&:hover": { backgroundColor: 'primary.main'}, color: 'white'}}>Sign Up</Button>
  </Box>
  <Typography variant='subtitle' sx={{mt: 2}}>Have an account? <Link variant='subtitle' component={ReactRouterLink} to='/auth/login' sx={{ textDecoration: 'none', fontWeight: 600, cursor: 'pointer'}}>Log in</Link></Typography>
  </Box>
  )
}

export default Signup  
