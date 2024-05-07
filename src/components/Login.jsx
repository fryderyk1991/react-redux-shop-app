import { Box, FormControl, InputLabel, OutlinedInput, Button, Typography, Link} from '@mui/material'

import { Link as ReactRouterLink } from "react-router-dom";

const Login = () => {
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
      <InputLabel htmlFor="password">Password</InputLabel>
      <OutlinedInput
        id="password"
        label="Password"
        type="password"
      />
    </FormControl>
    <Button type='submit' variant='contained' sx={{mt: 2, width: '100%', textTransform: 'capitalize', "&:hover": { backgroundColor: 'primary.main'}, color: 'white'}}>Log in</Button>
  </Box>
  <Typography variant='subtitle' sx={{mt: 2}}>Don&apos;t have an account? <Link variant='subtitle' component={ReactRouterLink} to='/auth/signup' sx={{ textDecoration: 'none', fontWeight: 600, cursor: 'pointer'}}>Sign up</Link></Typography>
  </Box>
  )
}


export default Login